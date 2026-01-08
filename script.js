body {
    font-family: 'Noto Serif Bengali', serif;
    background-color: #FDFBF7;
    margin: 0;
    color: #3E2723;
    line-height: 1.6;
}

.app-header {
    background: #880E4F;
    color: #FFEB3B;
    text-align: center;
    padding: 40px 20px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    box-shadow: 0 4px 15px rgba(136, 14, 79, 0.4);
}

.header-top { font-size: 3rem; display: block; margin-bottom: 10px; }
.app-header h1 { margin: 0; font-size: 2rem; }
.app-header p { margin: 5px 0 0; font-size: 1rem; opacity: 0.9; }

.container {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

/* গল্পের কার্ড ডিজাইন */
.story-card {
    background: white;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    border-left: 5px solid #880E4F;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: transform 0.2s;
}

.story-card:hover { transform: translateY(-3px); }

.card-icon {
    font-size: 3rem;
    margin-right: 20px;
    background: #FCE4EC;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}

.card-info h3 { margin: 0; font-size: 1.2rem; color: #880E4F; }
.card-info p { margin: 5px 0 0; font-size: 0.9rem; color: #795548; }

/* মোডাল ডিজাইন */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    z-index: 1000;
    padding: 10px;
    box-sizing: border-box;
}

.modal-content {
    background: #FFF;
    max-width: 700px;
    height: 100%;
    margin: 0 auto;
    border-radius: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.close-btn {
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 35px;
    cursor: pointer;
    color: #880E4F;
    z-index: 10;
    background: rgba(255,255,255,0.8);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
}

.story-header {
    padding: 20px;
    background: #FCE4EC;
    text-align: center;
    border-bottom: 2px solid #880E4F;
}

.modal-icon-img { font-size: 3rem; display: block; margin-bottom: 10px; }

.story-body-container {
    flex: 1;
    overflow-y: auto;
    padding: 25px;
}

.long-story-text {
    font-size: 1.2rem;
    text-align: justify;
    color: #212121;
}

.moral-footer {
    padding: 15px;
    background: #E8F5E9;
    border-top: 2px solid #4CAF50;
    font-size: 1.1rem;
}
