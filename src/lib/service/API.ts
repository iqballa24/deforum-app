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
    putAccessToken,
    getAccessToken,
    getAllThreads,
    getAllUsers,
    getThreadDetail,
    getLeaderboards
  };
})();

export default API;
