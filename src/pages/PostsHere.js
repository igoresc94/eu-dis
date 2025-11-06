import React, { useEffect, useState } from 'react';

const PostsHere = () => {
  const [posts, setPosts] = useState([]);

  // To track which post description is expanded
  const [expandedPostIndex, setExpandedPostIndex] = useState(null);

  // To track which post's delete password input is shown
  const [showPasswordFor, setShowPasswordFor] = useState(null);

  // Delete password input state
  const [passwordInput, setPasswordInput] = useState('');

  // Delete password error message
  const [deleteError, setDeleteError] = useState('');

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    setPosts(storedPosts);
  }, []);

  // Save posts to localStorage on every change
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  // Toggle description and image visibility on card click (excluding trashcan)
  const toggleExpand = (index) => {
    setExpandedPostIndex(expandedPostIndex === index ? null : index);
  };

  // Handle delete logic with password check
  const handleDelete = (index) => {
    if (passwordInput === 'iamthebest') {
      const newPosts = [...posts];
      newPosts.splice(index, 1);
      setPosts(newPosts);
      setShowPasswordFor(null);
      setPasswordInput('');
      setDeleteError('');
    } else {
      setDeleteError('Incorrect password.');
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
              backgroundColor: '#007BFF', // Bootstrap primary blue
              color: 'white',
              borderRadius: 10,
              padding: 20,
              marginBottom: 20,
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              {/* Clicking on this text toggles expand */}
              <div
                onClick={() => toggleExpand(index)}
                style={{ flex: 1 }}
                title="Click to toggle description and image"
              >
                <h3 style={{ margin: 0 }}>{post.title}</h3>
                <p style={{ margin: '5px 0' }}>
                  <strong>Category:</strong> {post.category} <br />
                  <strong>Country:</strong> {post.country} <br />
                  <strong>Topic:</strong> {post.topic}
                </p>
              </div>

              {/* Trashcan delete */}
              <div style={{ marginLeft: 10 }}>
                <button
                  onClick={() => {
                    setShowPasswordFor(index);
                    setPasswordInput('');
                    setDeleteError('');
                  }}
                  title="Delete this post"
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    fontSize: 24,
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                >
                  🗑️
                </button>

                {/* Show password input and buttons if delete active */}
                {showPasswordFor === index && (
                  <div style={{ marginTop: 8, textAlign: 'right' }}>
                    <input
                      type="password"
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                      placeholder="Password"
                      autoFocus
                      style={{
                        padding: 4,
                        borderRadius: 4,
                        border: '1px solid #ccc',
                        marginBottom: 4,
                        width: '100%',
                        boxSizing: 'border-box',
                      }}
                    />
                    <div>
                      <button
                        onClick={() => handleDelete(index)}
                        style={{
                          backgroundColor: '#dc3545',
                          color: 'white',
                          border: 'none',
                          borderRadius: 4,
                          padding: '4px 12px',
                          marginRight: 4,
                          cursor: 'pointer',
                        }}
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => {
                          setShowPasswordFor(null);
                          setPasswordInput('');
                          setDeleteError('');
                        }}
                        style={{
                          backgroundColor: '#6c757d',
                          color: 'white',
                          border: 'none',
                          borderRadius: 4,
                          padding: '4px 12px',
                          cursor: 'pointer',
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                    {deleteError && (
                      <p style={{ color: '#ffdddd', marginTop: 4 }}>{deleteError}</p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Expanded content description + image */}
            {expandedPostIndex === index && (
              <div style={{ marginTop: 15 }}>
                <p style={{ whiteSpace: 'pre-wrap' }}>{post.description}</p>
                {post.image && (
                  <img
                    src={post.image}
                    alt={`${post.title} image`}
                    style={{ maxWidth: '100%', borderRadius: 8, marginTop: 10 }}
                  />
                )}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default PostsHere;
