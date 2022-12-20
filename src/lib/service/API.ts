import { registerTypes, FormLoginTypes, createThreadTypes } from '@/lib/types';

const API = (() => {
  const BASE_URL = 'https://forum-api.dicoding.dev/v1';

  async function _fetchWithAuth(url: string, options = {}) {
    return fetch(url, {
      ...options,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
  }

  function putAccessToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  function getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  async function register({ name, email, password }: registerTypes) {
    const res = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    const resJson = await res.json();
    const { status, message } = resJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {
      data: { user },
    } = resJson;

    return user;
  }

  async function login({ email, password }: FormLoginTypes) {
    const res = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const resJson = await res.json();

    const { status, message } = resJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {
      data: { token },
    } = resJson;

    return token;
  }

  async function getAllThreads() {
    const res = await fetch(`${BASE_URL}/threads`);
    const resJson = await res.json();

    const { status, message } = resJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {
      data: { threads },
    } = resJson;

    return threads;
  }

  async function createThread({ title, body, category }: createThreadTypes) {
    const res = await _fetchWithAuth(`${BASE_URL}/threads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        body,
        category,
      }),
    });

    const resJson = await res.json();

    const { status, message } = resJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {
      data: { thread },
    } = resJson;

    return thread;
  }

  async function getThreadDetail(id: string) {
    const res = await fetch(`${BASE_URL}/threads/${id}`);
    const resJson = await res.json();

    const { status, message } = resJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {
      data: { detailThread },
    } = resJson;

    return detailThread;
  }

  async function createCommentThread(content: string, id: string) {
    const res = await _fetchWithAuth(`${BASE_URL}/threads/${id}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    });

    const resJson = await res.json();

    const { status, message } = resJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {
      data: { comment },
    } = resJson;

    return comment;
  }

  async function getOwnProfile() {
    const res = await _fetchWithAuth(`${BASE_URL}/users/me`);
    const resJson = await res.json();

    const { status, message } = resJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {
      data: { user },
    } = resJson;

    return user;
  }

  async function getAllUsers() {
    const res = await fetch(`${BASE_URL}/users`);
    const resJson = await res.json();

    const { status, message } = resJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {
      data: { users },
    } = resJson;

    return users;
  }

  async function getLeaderboards() {
    const res = await fetch(`${BASE_URL}/leaderboards`);
    const resJson = await res.json();

    const { status, message } = resJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {
      data: { leaderboards },
    } = resJson;

    return leaderboards;
  }

  return {
    login,
    register,
    getOwnProfile,
    putAccessToken,
    getAccessToken,
    getAllThreads,
    getAllUsers,
    getThreadDetail,
    getLeaderboards,
    createThread,
    createCommentThread,
  };
})();

export default API;
