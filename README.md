# Powerchair Football Danmark Website

## Admin Security

**Default password:** `admin123`

⚠️ **CRITICAL:** Change the default password immediately!

### Security Features

- **SHA-512 Password Hashing**: Passwords are hashed using SHA-512
- **Session Tokens**: Random 64-character session tokens
- **Login Attempt Limiting**: Max 5 attempts, 15-minute lockout
- **Session Timeout**: 1-hour automatic logout
- **XSS Protection**: HTML sanitization on all user inputs
- **DevTools Detection**: Automatic logout when developer tools detected
- **Input Validation**: Pattern matching and required fields

### How to change the admin password:

1. Open your browser console (F12) on localhost
2. Run this command with your new password:

```javascript
async function generatePasswordHash(password) {
    const msgBuffer = new TextEncoder().encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-512', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Generate hash for your new password
await generatePasswordHash('YOUR_NEW_PASSWORD_HERE');
```

3. Copy the generated hash
4. Open `admin.html` and find the line:
   ```javascript
   const expectedHash = 'c7ad44...';
   ```
5. Replace with your new hash
6. Save the file

### Advanced: RSA Encryption Setup

For production environments, implement proper RSA encryption:

1. Generate RSA key pair (2048-bit minimum):
```bash
# Generate private key
openssl genrsa -out private_key.pem 2048

# Generate public key
openssl rsa -in private_key.pem -pubout -out public_key.pem
```

2. Store private key **offline and secure**
3. Use public key in application for password verification
4. Implement backend verification with private key

## Data Storage

All data is stored in browser localStorage:
- `pcfb_results` - Match results
- `pcfb_teams` - Team information
- `pcfb_admin_session` - Admin session with token
- `pcfb_login_attempts` - Login attempt tracking

## Security Best Practices

1. ✅ Always use HTTPS in production
2. ✅ Change default password immediately
3. ✅ Regular data backups via JSON export
4. ✅ Monitor login attempts
5. ✅ Keep session duration reasonable
6. ⚠️ Consider server-side authentication for production
7. ⚠️ Implement Content Security Policy (CSP)
8. ⚠️ Use CSRF tokens for sensitive operations

## Production Deployment Checklist

- [ ] Change admin password
- [ ] Enable HTTPS
- [ ] Set up CSP headers
- [ ] Configure rate limiting
- [ ] Set up monitoring/logging
- [ ] Regular security audits
- [ ] Backup strategy in place
