# New App

## Overview

New App is an application that allows users to communicate with an AI assistant in writing and voice. The AI assistant takes on the role of a wise advisor, providing guidance and support to help users navigate through challenging times and overcome psychological hurdles. The app aims to help depressed and psychologically tired individuals overcome their psychological ordeals by offering compassionate and thoughtful advice.

## Features

- **User Authentication**: Secure login using Supabase Authentication with social providers like Google, Facebook, and Apple.
- **Text Communication**: Users can send text messages to the AI assistant and receive thoughtful responses tailored to provide support and guidance.
- **Voice Communication**: Users can speak to the AI assistant and hear responses via text-to-speech.
- **Interactive Chat Interface**: A user-friendly chat interface that displays the conversation history.
- **Responsive Design**: The app is designed to be responsive and user-friendly on all device sizes.
- **Error Handling and Loading States**: Provides feedback to the user during API calls and handles errors gracefully.
- **Progressive Web App**: Installable and works offline using Progressier.
- **Made on ZAPT Badge**: A badge linking to [ZAPT](https://www.zapt.ai) is displayed on the app.

## User Journeys

### 1. Sign Up / Login

1. **Visit the App**: The user opens the app and lands on the login page.
2. **Sign in with ZAPT**: The user sees the "Sign in with ZAPT" heading and can click on the link to learn more about ZAPT.
3. **Authenticate**: The user logs in using their preferred method (email magic link, Google, Facebook, or Apple).
4. **Access Granted**: Upon successful authentication, the user is redirected to the home page.

### 2. Text Conversation with the AI Assistant

1. **Start Chatting**: On the home page, the user sees a chat interface with previous messages.
2. **Send Message**: The user types a message seeking advice and clicks the "Send" button.
3. **Receive Response**: The AI assistant responds with thoughtful and compassionate advice, which appears in the chat.
4. **Continue Conversation**: The user can continue sending messages and receiving responses.

### 3. Voice Conversation with the AI Assistant

1. **Enable Microphone**: The user clicks on the microphone icon to start a voice input.
2. **Speak Message**: The user speaks their message, and it is transcribed into text.
3. **Confirm Message**: The transcribed message is displayed; the user can edit it if needed.
4. **Send Message**: The user sends the message to the AI assistant.
5. **Hear Response**: The AI assistant's response is displayed in text and played as audio via text-to-speech.
6. **Continue Conversation**: The user can continue the voice conversation or switch back to text input.

### 4. Sign Out

1. **Sign Out Button**: The user clicks the "Sign Out" button.
2. **Session Ended**: The user is redirected back to the login page.

## External APIs and Services

- **ZAPT**: Used for event handling and API requests to communicate with the AI backend.
- **Supabase**: Handles user authentication.
- **Progressier**: Provides PWA functionalities.
- **Sentry**: Error tracking and monitoring.
- **Vercel Analytics**: Analytics and performance monitoring.

## Made on ZAPT

This app was made on [ZAPT](https://www.zapt.ai).
