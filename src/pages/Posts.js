import React, { useEffect, useState } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPostContent, setSelectedPostContent] = useState(null);
  const [selectedPostTitle, setSelectedPostTitle] = useState('');
  const [error, setError] = useState(null);
  const [showPasswordFor, setShowPasswordFor] = useState(null); // index of the post to delete
  const [passwordInput, setPasswordInput] = useState('');
  const [deleteError, setDeleteError] = useState('');

  const { dashboardId, googleApiKey } = window.appConf || {};
  const sheetName = 'Posts';

  useEffect(() => {
    if (!dashboardId || !googleApiKey) {
      setError('Configuração da planilha ou API key não encontrada');
      return;
    }

    const sheetsUrl = `https://sheets.googleapis.com/v4/spreadsheets/${dashboardId}/values/${sheetName}?key=${googleApiKey}`;

    fetch(sheetsUrl)
      .then((res) => {
        if (!res.ok) throw new Error('Erro ao buscar planilha');
        return res.json();
      })
      .then((data) => {
        const rows = data.values;
        if (!rows || rows.length < 2) {
          setPosts([]);
          return;
        }
        const headers = rows[0];
        const postRows = rows.slice(1);
        const parsedPosts = postRows.map((row) => {
          const obj = {};
          headers.forEach((h, i) => {
            obj[h.toLowerCase()] = row[i] || '';
          });
          return obj;
        });
        setPosts(parsedPosts);
      })
      .catch((err) => setError(err.message));
  }, [dashboardId, googleApiKey]);

  const fetchPostContent = (postId, title) => {
    const exportUrl = `https://www.googleapis.com/drive/v3/files/${postId}/export?mimeType=text/plain&key=${googleApiKey}`;

    fetch(exportUrl)
      .then((res) => {
        if (!res.ok) throw new Error('Erro ao carregar conteúdo do post');
        return res.text();
      })
      .then((text) => {
        setSelectedPostContent(text);
        setSelectedPostTitle(title);
      })
      .catch((err) => setError(err.message));
  };

  // Handler for deleting a post after password confirmation
  const handleDelete = (index) => {
    if (passwordInput === 'iamthebest') {
      const newPosts = [...posts];
      newPosts.splice(index, 1);
      setPosts(newPosts);
      setShowPasswordFor(null);
      setPasswordInput('');
      setDeleteError('');
      // TODO: Here you would trigger your backend/API delete, if needed
    } else {
      setDeleteError('Incorrect password.');
    }
  };

  if (error) return <p>Erro: {error}</p>;

  if (selectedPostContent) {
    return (
      <div style={{ padding: 0 }}>
        <button onClick={() => setSelectedPostContent(null)}>Back to articles</button>
        <h3>{selectedPostTitle}</h3>
        <pre style={{ whiteSpace: 'pre-wrap' }}>{selectedPostContent}</pre>
      </div>
    );
  }

  return (
    <div style={{ padding: 10, fontFamily: 'Arial, sans-serif' }}>
      <h2>Articles</h2>
      {posts.map((post, index) => (
        <div
          key={index}
          style={{
            borderBottom: '1px solid #ccc',
            marginBottom: 15,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
          title="Clique para ver o texto do artigo"
        >
          <div style={{ flex: 1 }} onClick={() => fetchPostContent(post['post id'], post.title)}>
            <h3>{post.title}</h3>
            <p>
              <b>Category: {post.category} </b>  <b>Country: {post.country} </b> {' '}
              <b>Topic: {post.topic}</b>   <b>Subtitle: {post.subtitle} </b> 
            </p>
          </div>
          <div style={{ marginLeft: 10 }}>
            <button
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: 20,
                color: '#888'
              }}
              title="Delete this post"
              onClick={() => setShowPasswordFor(index)}
            >
              🗑️
            </button>
            {showPasswordFor === index && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <input
                  type="password"
                  value={passwordInput}
                  style={{ marginTop: 4, marginBottom: 4 }}
                  placeholder="Password"
                  onChange={(e) => setPasswordInput(e.target.value)}
                  autoFocus
                />
                <div>
                  <button
                    style={{
                      background: '#e74c3c',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 3,
                      marginRight: 4,
                      padding: '2px 10px',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                  <button
                    style={{
                      background: '#bbb',
                      color: '#222',
                      border: 'none',
                      borderRadius: 3,
                      padding: '2px 10px',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}
                    onClick={() => {
                      setShowPasswordFor(null);
                      setPasswordInput('');
                      setDeleteError('');
                    }}
                  >
                    Cancel
                  </button>
                </div>
                {deleteError && (
                  <p style={{ color: '#e74c3c', margin: 0 }}>{deleteError}</p>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
