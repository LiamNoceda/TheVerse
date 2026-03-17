use axum::Json;
use crate::models::User;

pub async fn get_all_users() -> axum::Json<Vec<crate::models::User>> {
    let users: Vec<User> = vec![
        User {
            id: 1,
            username: "alex_rust".into(),
            avatar_url: "/uploads/alex.jpg".into(),
        },
        User {
            id: 2,
            username: "maria".into(),
            avatar_url: "/uploads/alex.jpg".into(),
        },
    ];

    Json(users)
}
