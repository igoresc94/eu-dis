import React, { useEffect, useState } from 'react';

const PostsHere = () => {
  const [posts, setPosts] = useState([]);
  const [openIndexes, setOpenIndexes] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    setPosts(storedPosts);
  }, []);

  const toggleCard = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const handleDelete = (index) => {
    const confirmation = prompt('Type password to confirm deletion:');
    if (confirmation === 'iamthebest') {
      const updatedPosts = posts.filter((_, i) => i !== index);
      setPosts(updatedPosts);
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
      // Optionally close the expanded card if it was open
      setOpenIndexes((prev) => prev.filter((i) => i !== index));
    } else {
      alert('Deletion cancelled or wrong confirmation text.');
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: 'auto', padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 30 }}>All Posts</h1>

      {posts.length === 0 ? (
        <p>No posts yet. Go to the Upload Page to add one.</p>
      ) : (
        posts.map((post, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #3498db',
              borderRadius: 10,
              marginBottom: 20,
              backgroundColor: '#3498db',
              color: 'white',
              cursor: 'pointer',
              boxShadow: openIndexes.includes(index)
                ? '0 4px 18px rgba(52, 152, 219, .18)'
                : '0 1px 4px rgba(52, 152, 219, .10)',
              transition: 'box-shadow 0.2s',
            }}
          >
            {/* Card header: toggle on click */}
            <div
              onClick={() => toggleCard(index)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 20,
              }}
            >
              <div>
                <h3 style={{ marginTop: 0, marginBottom: 8, color: 'white' }}>{post.title}</h3>
                <p style={{ margin: '3px 0' }}><strong>Category:</strong> {post.category}</p>
                <p style={{ margin: '3px 0' }}><strong>Country:</strong> {post.country}</p>
                <p style={{ margin: '3px 0' }}><strong>Topic:</strong> {post.topic}</p>
                <p style={{ margin: '3px 0' }}><strong>Subtitle:</strong> {post.subtitle}</p>
              </div>
            </div>

            {/* Expanded part */}
            {openIndexes.includes(index) && (
              <div
                style={{
                  backgroundColor: '#3498db',
                  color: 'white',
                  borderRadius: '0 0 10px 10px',
                  padding: 20,
                  borderTop: '1px solid #2980b9',
                  position: 'relative',
                }}
              >
                <p><strong>Description:</strong> {post.description}</p>
                {post.image && (
                  <div style={{ marginTop: 10 }}>
                    <img
                      src={post.image}
                      alt={post.title}
                      style={{ maxWidth: '100%', borderRadius: 8 }}
                    />
                  </div>
                )}
                {/* Trash bin button */}
                <span
                  title="Delete"
                  style={{
                    position: 'absolute',
                    top: 15,
                    right: 15,
                    fontSize: 24,
                    cursor: 'pointer',
                    userSelect: 'none',
                    color: 'white',
                    transition: 'color 0.2s',
                  }}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent toggling card
                    handleDelete(index);
                  }}
                >
                  🗑️
                </span>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default PostsHere;
