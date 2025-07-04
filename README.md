# Marginalia

**Marginalia** is a modern, thoughtful alternative to Goodreads — a platform to track, review, and reflect on the media you consume. Built with a clean, responsive UI inspired by **Letterboxd**, it’s designed for how we actually engage with books and culture today.

---

## Key Features

- Track books
- Write reviews (*marginalia*)  
- An AI assistant to get new recommendations  
- Semantic search  
- Clean, responsive UI with Bootstrap 5  
- User profiles and social features  

---

## Vision

Marginalia is not just a database — it's an **intelligent, personal archive**.  
Unlike Goodreads, which emphasizes ratings and linear reviews, Marginalia centers the **subjective, evolving relationship** between you and what you read.

Inspired by:

- The social interface of **Letterboxd**  
- The introspective depth of **reading journals**  
- The connective intelligence of **AI-powered memory**  

---

## Tech Stack

- **Backend:** Ruby on Rails 7  
- **Frontend:** Bootstrap 5 + ERB views  
- **Database:** PostgreSQL + "neighbour" gem
- **AI:** OpenAI API (embeddings + optional chat context)
- **Auth:** Devise

---

## AI and Embeddings

Marginalia integrates OpenAI's models to :

- Embed user readings and lists  
- Perform semantic search  
- Optionally power a reflective assistant based on previous activity  
