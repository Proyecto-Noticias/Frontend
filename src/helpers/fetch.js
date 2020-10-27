const baseUrl = process.env.REACT_APP_API_URL;

const fetchWithToken = (endpoint, data, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`;
  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};

const fetchConToken = (endpoint, data, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`;
  const token = localStorage.getItem("token") || "";
  if (method === "GET") {
    return fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
  }
};

const getNewById = async (_id) => {
  const url = `${baseUrl}/news/${_id}`;
  const resp = await fetch(url);
  const yourNew = await resp.json();
  return yourNew;
};

const getNewsByCategory = async (category) => {
  const url = `${baseUrl}/news/category/${category}`;
  const resp = await fetch(url);
  const newsCategory = await resp.json();
  return newsCategory;
};
const updateIsAdmin = (endpoint, data, method = 'GET') => {
  const url = `${baseUrl}/${endpoint}`;
  const token = localStorage.getItem('token') ||'';
  return fetch( url,
    {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }
  )
}

const deleteUser = (endpoint, method = 'GET') => {
  const url = `${baseUrl}/${endpoint}`;
  const token = localStorage.getItem('token') ||'';
  return fetch( url,
    {
      method: method,
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    }
  )
}


const getNewsBySearch = async (searchWord) => {
  const url = `${baseUrl}/news/search/all/?search=${searchWord}`;
  const resp = await fetch(url);
  const newsSearched = await resp.json();
  return newsSearched;
};

export {
  fetchWithToken,
  fetchConToken,
  getNewById,
  getNewsByCategory,
  getNewsBySearch,
  updateIsAdmin,
  deleteUser
}
