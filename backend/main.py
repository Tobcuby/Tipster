from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
import uvicorn
from nba_api.stats import endpoints

app = FastAPI(title="Tipster API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to Tipster API"}

@app.get("/api/games/today")
async def get_todays_games():
    try:
        games = endpoints.ScoreboardV2(game_date=datetime.now().strftime("%Y-%m-%d"))
        return {"games": games.get_data_frames()[0].to_dict('records')}
    except Exception as e:
        return {"error": str(e)}

@app.get("/api/players/stats/{player_id}")
async def get_player_stats(player_id: str):
    try:
        player_stats = endpoints.PlayerGameLogs(player_id=player_id).get_data_frames()[0]
        return {"stats": player_stats.to_dict('records')}
    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True) 