use serde::Serialize;

#[derive(Serialize)]
pub struct User {
    pub id: u64,
    pub username: String,
    pub avatar_url: String,
}

#[derive(Serialize)]
pub struct Post {
    pub id: u64,
    pub author_id: u64,
    pub text: String,
    pub image_url: Option<String>,
}
