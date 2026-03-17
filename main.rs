use axum::{routing::get, Router};
use std::net::SocketAddr;

mod models;
mod handlers;

#[tokio::main]
async fn main() {
    let app: Router = Router::new()
        .route("/users", get(handlers::get_all_users))
        .route("/profile", get(|| async {
            "This is a spaceself"
        }));
    
    let addr: SocketAddr = SocketAddr::from(([127, 0, 0, 1], 3000));
    println!("Server started now on http://{}", addr);

    let listener: tokio::net::TcpListener = tokio::net::TcpListener::bind(addr).await.unwrap();
    axum::serve(listener, app).await.unwrap();
}
