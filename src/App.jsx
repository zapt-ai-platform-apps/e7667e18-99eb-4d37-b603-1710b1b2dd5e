import { createSignal, onMount, createEffect, For, Show } from 'solid-js';
import { createEvent, supabase } from './supabaseClient';
import { Auth } from '@supabase/auth-ui-solid';
import { ThemeSupa } from '@supabase/auth-ui-shared';

function App() {
  const [messages, setMessages] = createSignal([]);
  const [newMessage, setNewMessage] = createSignal('');
  const [user, setUser] = createSignal(null);
  const [currentPage, setCurrentPage] = createSignal('login');
  const [loading, setLoading] = createSignal(false);
  const [listening, setListening] = createSignal(false);

  const checkUserSignedIn = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      setUser(user);
      setCurrentPage('homePage');
    }
  };

  onMount(checkUserSignedIn);

  createEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((_, session) => {
      if (session?.user) {
        setUser(session.user);
        setCurrentPage('homePage');
      } else {
        setUser(null);
        setCurrentPage('login');
      }
    });
    return () => {
      authListener?.unsubscribe();
    };
  });

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setCurrentPage('login');
  };

  const sendMessage = async () => {
    if (!newMessage()) return;
    setLoading(true);
    const message = newMessage();
    setMessages([...messages(), { sender: 'user', text: message }]);
    setNewMessage('');
    try {
      const response = await createEvent('chatgpt_request', {
        prompt: message,
        response_type: 'text'
      });
      if (response) {
        setMessages([...messages(), { sender: 'user', text: message }, { sender: 'ai', text: response }]);
        handleTextToSpeech(response);
      }
    } catch (error) {
      console.error('Error communicating with AI:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleTextToSpeech = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const handleSpeechRecognition = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Speech Recognition not supported in this browser.');
      return;
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setNewMessage(transcript);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error', event.error);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();
  };

  return (
    <div class="h-full bg-gradient-to-br from-purple-100 to-blue-100 p-4 text-gray-900">
      <Show
        when={currentPage() === 'homePage'}
        fallback={
          <div class="flex items-center justify-center h-full">
            <div class="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
              <h2 class="text-3xl font-bold mb-6 text-center text-purple-600">Sign in with ZAPT</h2>
              <a
                href="https://www.zapt.ai"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-500 hover:underline mb-6 block text-center"
              >
                Learn more about ZAPT
              </a>
              <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
                providers={['google', 'facebook', 'apple']}
                magicLink={true}
                showLinks={false}
                view="magic_link"
              />
            </div>
          </div>
        }
      >
        <div class="max-w-2xl mx-auto h-full flex flex-col">
          <div class="flex justify-between items-center mb-4">
            <h1 class="text-2xl font-bold text-purple-600">Wise Advisor</h1>
            <button
              class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>

          <div class="flex-1 overflow-auto mb-4">
            <For each={messages()}>
              {(message) => (
                <div
                  class={`mb-4 p-4 rounded-lg shadow-md ${
                    message.sender === 'user' ? 'bg-white self-end text-right' : 'bg-purple-200 self-start text-left'
                  }`}
                >
                  <p>{message.text}</p>
                </div>
              )}
            </For>
          </div>

          <div class="flex items-center">
            <input
              type="text"
              placeholder="Type your message..."
              value={newMessage()}
              onInput={(e) => setNewMessage(e.target.value)}
              class="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent box-border"
            />
            <button
              onClick={sendMessage}
              disabled={loading()}
              class={`ml-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer ${
                loading() ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading() ? 'Sending...' : 'Send'}
            </button>
            <button
              onClick={handleSpeechRecognition}
              disabled={listening()}
              class={`ml-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold p-3 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer ${
                listening() ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              🎤
            </button>
          </div>
        </div>
        <div class="mt-4 text-center">
          <a
            href="https://www.zapt.ai"
            target="_blank"
            rel="noopener noreferrer"
            class="text-purple-600 hover:underline"
          >
            Made on ZAPT
          </a>
        </div>
      </Show>
    </div>
  );
}

export default App;