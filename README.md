# New App

## Overview

New App is an application that allows users to communicate with an AI assistant in writing and voice. The AI assistant takes on the role of a wise advisor, providing guidance and support to help users navigate through challenging times and overcome psychological hurdles. The app aims to help depressed and psychologically tired individuals overcome their psychological ordeals by offering compassionate and thoughtful advice. The AI assistant initiates the conversation with a compassionate message generated dynamically to encourage users to share their feelings.

## Features

- **User Authentication**: Secure login using Supabase Authentication with social providers like Google, Facebook, and Apple.
- **Dynamic AI Greeting**: The AI assistant starts the conversation with a compassionate message generated dynamically to initiate the dialogue.
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

### 2. Conversation with the AI Assistant

1. **Initial Greeting**: Upon entering the home page, the AI assistant initiates the conversation with a compassionate message generated dynamically to encourage the user to share their feelings.
2. **View Messages**: The user sees the initial message from the AI assistant in the chat interface.
3. **Send Message**: The user types or speaks a message in response and clicks the "Send" button.
4. **Receive Response**: The AI assistant responds with thoughtful and compassionate advice, which appears in the chat. If the user used voice input, the AI's response is also played via text-to-speech.
5. **Continue Conversation**: The user can continue the conversation, sending messages and receiving supportive responses.

### 3. Sign Out

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