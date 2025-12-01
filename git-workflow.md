# FSA Project Git Workflow

## Quick Commands for Each Developer

### Kushal's Commands:
```bash
# Daily start
git checkout Kushal
git pull origin Kushal

# Daily work
# ... make changes to files ...
git add .
git commit -m "your message here"

# Daily end
git push origin Kushal

# Weekly sync (when Luniva is ready to merge)
git checkout main
git pull origin main
git checkout Kushal
git merge main
```

### Luniva's Commands:
```bash
# Daily start
git checkout lunivas
git pull origin lunivas

# Daily work
# ... make changes to files ...
git add .
git commit -m "your message here"

# Daily end
git push origin lunivas

# Weekly sync (when Kushal is ready to merge)
git checkout main
git pull origin main
git checkout lunivas
git merge main
```

## File Ownership (to avoid conflicts):

### Kushal works on:
- Homepage.jsx / Homepage.css
- Academics.jsx / Academics.css
- Video integration
- Navbar updates

### Luniva works on:
- AboutUs.jsx / AboutUs.css
- Contact.jsx / Contact.css
- Footer/Footnote components
- Detail pages (Mission, Vision, etc.)

## Merging Schedule:
- **Monday & Friday**: Sync both branches to main
- **Emergency**: If someone needs the other's work immediately

## Conflict Resolution:
If you get conflicts during merge:
1. Open the conflicted files in VS Code
2. Choose which version to keep
3. Remove the conflict markers (<<<, ===, >>>)
4. git add . && git commit -m "resolve conflicts"
