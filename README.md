# Powerchair Football Danmark Website

## GitHub Pages Deployment

This website is designed to work on GitHub Pages without any server-side code.

### Setup Instructions

1. **Fork or clone this repository**
2. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` (or `master`) → `/root`
   - Save

3. **First-time setup:**
   - Visit `https://yourusername.github.io/your-repo/setup.html`
   - Follow the setup wizard to create admin password
   - Load sample data or start fresh

4. **Access admin area:**
   - Visit `https://yourusername.github.io/your-repo/admin.html`
   - Login with your password

### How It Works

- **No Server Required:** All data stored in browser localStorage
- **Client-Side Only:** Pure HTML/CSS/JavaScript
- **Secure:** Password hashing with SHA-512
- **Automatic Updates:** Data refreshes every 5 minutes

### Data Storage

All data is stored locally in your browser:
- `pcfb_results` - Match results
- `pcfb_teams` - Team information
- `pcfb_admin_session` - Admin session with token
- `pcfb_admin_hash` - Encrypted admin password
- `pcfb_login_attempts` - Login attempt tracking
- `pcfb_setup_complete` - Setup completion flag

**Important:** Data is browser-specific. If you clear browser data or use a different browser/device, you'll need to re-enter data.

### Backup Your Data

Regularly backup your data via the admin panel:
1. Login to admin area
2. Scroll to "Eksporter" sections
3. Click "Kopier JSON" for teams and results
4. Save the JSON to a safe location

### Sharing Data Across Devices

Since GitHub Pages is static hosting, data doesn't sync automatically:

**Option 1: Manual Sync (Recommended)**
1. Export JSON from admin on Device A
2. Save to `data/teams.json` and `data/results.json`
3. Commit and push to GitHub
4. Pull on Device B
5. Data will load from JSON files

**Option 2: Use Same Browser**
- Use browser sync (Chrome Sync, Firefox Sync)
- localStorage may sync across devices

**Option 3: Backend Integration (Advanced)**
- Add a backend API (Firebase, Supabase, etc.)
- Replace localStorage calls with API calls

### File Structure

```
/home/jonasd/dev/pcfb/
├── index.html          # Main homepage
├── about.html          # About page
├── hold.html           # Teams page
├── results.html        # Results/leagues page
├── join.html           # Join page
├── contact.html        # Contact page
├── admin.html          # Admin dashboard
├── setup.html          # First-run setup wizard
├── styles.css          # Shared styles (create if needed)
├── script.js           # Shared scripts (create if needed)
├── data/
│   ├── teams.json      # Team data (fallback)
│   └── results.json    # Results data (fallback)
└── README.md           # This file
```

### Admin Password

**Default password:** `admin123`

⚠️ **CRITICAL:** Change immediately via setup.html

### Security Features

✅ SHA-512 password hashing  
✅ Session tokens (1-hour timeout)  
✅ Login attempt limiting (5 attempts, 15-min lockout)  
✅ XSS protection (HTML sanitization)  
✅ DevTools detection (auto-logout in production)  
✅ Input validation  

### Browser Compatibility

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Known Limitations

1. **No real-time sync** between devices
2. **Data loss** if browser data is cleared
3. **No server-side validation** (client-side only)
4. **No user management** (single admin account)

### Troubleshooting

**Problem:** Can't see data on different device  
**Solution:** Export/import JSON or commit data files to repo

**Problem:** Forgot admin password  
**Solution:** Run setup.html again or clear localStorage

**Problem:** Login attempts locked  
**Solution:** Wait 15 minutes or clear `pcfb_login_attempts` from localStorage

**Problem:** Data disappeared  
**Solution:** Check if browser data was cleared; restore from JSON backup

### Development

To test locally:
```bash
# Serve with any static server
python -m http.server 8000
# or
npx serve
```

Then visit `http://localhost:8000`

### Production Checklist

- [ ] Change admin password from `admin123`
- [ ] Test all pages on GitHub Pages URL
- [ ] Backup data to JSON files
- [ ] Commit data files to repository
- [ ] Update contact information
- [ ] Test on mobile devices
- [ ] Verify HTTPS is working

### License

© 2025 Powerchair Football Danmark. All rights reserved.
