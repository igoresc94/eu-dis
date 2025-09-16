import React, { useEffect, useState } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPostContent, setSelectedPostContent] = useState(null);
  const [selectedPostTitle, setSelectedPostTitle] = useState('');
  const [error, setError] = useState(null);

  // dashboardId e apiKey devem estar disponíveis em window.appConf
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

  // Função para buscar conteúdo do arquivo Google Docs via export da Drive API
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

  if (error) return <p>Erro: {error}</p>;

  if (selectedPostContent) {
    return (
      <div style={{ padding: 20 }}>
        <button onClick={() => setSelectedPostContent(null)}>Voltar</button>
        <h2>{selectedPostTitle}</h2>
        <pre style={{ whiteSpace: 'pre-wrap' }}>{selectedPostContent}</pre>
      </div>
    );
  }

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h2>Articles</h2>
      {posts.map((post, index) => (
        <div
          key={index}
          onClick={() => fetchPostContent(post['post id'], post.title)}
          style={{
            borderBottom: '1px solid #ccc',
            marginBottom: 15,
            cursor: 'pointer',
          }}
          title="Clique para ver o texto do artigo"
        >
          <h3>{post.title}</h3>
          <h4>{post.subtitle}</h4>
          <p>
            <b>Category:</b> {post.category} | <b>Country:</b> {post.country} |{' '}
            <b>Topic:</b> {post.topic}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
