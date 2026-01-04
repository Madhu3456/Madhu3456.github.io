/**
 * Blog Site - Main JavaScript
 * Handles loading and rendering of blog posts from posts.json
 */

(function() {
  'use strict';

  /**
   * Format a date string to a human-readable format
   * @param {string} dateString - ISO date string (YYYY-MM-DD)
   * @returns {string} Formatted date
   */
  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('en-US', options);
  }

  /**
   * Create HTML for a single post card
   * @param {Object} post - Post data object
   * @returns {string} HTML string for the post card
   */
  function createPostCard(post) {
    return `
      <article class="post-card">
        <a href="${post.file}">
          <time class="post-card__date" datetime="${post.date}">${formatDate(post.date)}</time>
          <h3 class="post-card__title">${escapeHtml(post.title)}</h3>
          <p class="post-card__excerpt">${escapeHtml(post.excerpt)}</p>
          <span class="post-card__read-more">Read more</span>
        </a>
      </article>
    `;
  }

  /**
   * Escape HTML special characters to prevent XSS
   * @param {string} text - Text to escape
   * @returns {string} Escaped text
   */
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /**
   * Show empty state when no posts are available
   * @param {HTMLElement} container - Container element
   * @param {string} message - Message to display
   */
  function showEmptyState(container, message) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state__icon">📝</div>
        <p>${escapeHtml(message)}</p>
      </div>
    `;
  }

  /**
   * Load and render posts from posts.json
   */
  async function loadPosts() {
    const container = document.getElementById('posts-container');
    
    if (!container) {
      console.error('Posts container not found');
      return;
    }

    try {
      const response = await fetch('posts.json');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const posts = await response.json();
      
      if (!Array.isArray(posts) || posts.length === 0) {
        showEmptyState(container, 'No posts yet. Check back soon!');
        return;
      }

      // Sort posts by date (newest first)
      posts.sort((a, b) => new Date(b.date) - new Date(a.date));

      // Render posts
      container.innerHTML = posts.map(createPostCard).join('');
      
    } catch (error) {
      console.error('Error loading posts:', error);
      
      // For local file:// protocol, show a helpful message
      if (window.location.protocol === 'file:') {
        showEmptyState(
          container, 
          'To view posts locally, please use a local server (e.g., "python -m http.server"). For GitHub Pages, posts will load automatically.'
        );
      } else {
        showEmptyState(container, 'Unable to load posts. Please try again later.');
      }
    }
  }

  /**
   * Initialize the application
   */
  function init() {
    // Only load posts on the index page
    if (document.getElementById('posts-container')) {
      loadPosts();
    }
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

