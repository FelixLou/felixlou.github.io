# Blog Publishing Scripts

## Medium Publisher

A command-line tool to publish your blog posts from this site to Medium.

### Setup

1. **Get your Medium Integration Token:**
   - Go to [Medium Settings](https://medium.com/me/settings)
   - Navigate to "Security and apps"
   - Scroll down to "Integration tokens"
   - Generate a new token

2. **Set up the token (optional):**
   ```bash
   export MEDIUM_TOKEN="your-token-here"
   ```
   
   Or you can enter it when prompted by the script.

### Usage

Run the script from the project root:

```bash
node scripts/publish-to-medium.js
```

The script will:
1. Authenticate with your Medium account
2. Show all available blog posts from `public/blog-posts/`
3. Let you select which post to publish
4. Ask for publishing options:
   - Draft or Public status
   - Canonical URL (optional - use if post is originally from your site)
   - Tags (up to 5, comma-separated)
5. Publish to Medium and provide the URL

### Features

- **Interactive CLI**: Easy-to-use command line interface
- **Draft/Public modes**: Choose whether to publish publicly or as a draft
- **Canonical URL support**: Maintain SEO when cross-posting
- **Tag support**: Add up to 5 tags to your Medium post
- **Batch publishing**: Publish multiple posts in one session
- **Automatic attribution**: Adds a link back to your original post if no canonical URL is provided

### Notes

- Medium API only supports creating new posts, not updating existing ones
- Posts are published in Markdown format
- Images should use absolute URLs to work properly on Medium
- The script preserves your original markdown formatting

### Troubleshooting

If you encounter authentication issues:
1. Verify your token is correct
2. Check that your token hasn't expired
3. Ensure you have internet connectivity

For API errors, the script will display detailed error messages to help diagnose the issue.