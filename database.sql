CREATE DATABASE racedatabase DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;

USE racedatabase;

CREATE TABLE users(
    id int AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE cars(
    id int AUTO_INCREMENT PRIMARY KEY,
    brand VARCHAR(255),
    name VARCHAR(255),
    year int,
    engine VARCHAR(255),
    image_url VARCHAR(255)
);

INSERT INTO cars(brand, name, year, engine, image_url) VALUES ("Bentley", "Flying Spur Mulliner", 2024, "6.0L, W12, benzinmotor", "https://www.bentleyofgreenwich.com/imagetag/7165/main/l/New-2024-Bentley-Flying-Spur-Mulliner-W12.jpg");
INSERT INTO cars(brand, name, year, engine, image_url) VALUES ("Bentley", "Bentayga", 2020, "4.0L, V8, benzinmotor", "https://d3jvxfsgjxj1vz.cloudfront.net/news/wp-content/uploads/2020/07/01101658/Image-1-The-New-Bentayga-Front.jpg");
INSERT INTO cars(brand, name, year, engine, image_url) VALUES ("Bentley", "Continental GT Speed", 2025, "4.0L, V8, Plug-in hibrid", "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/review/hero_image/2025-Bentley-Continental-GT-Speed-Anthracite-Satin-1001x565.jpg");
INSERT INTO cars(brand, name, year, engine, image_url) VALUES ("Bentley", "Flying Spur V8", 2021, "4.0L, V8, benzinmotor", "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1611675481/autoexpress/2021/01/Bentley%20Flying%20Spur%20V8.jpg");
INSERT INTO cars(brand, name, year, engine, image_url) VALUES ("Bentley", "Continental GT V8 Convertible", 2022, "4.0L, V8, benzinmotor", "https://www.goldcoastautogallery.com/galleria_images/11271/11271_p2_l.jpg");

INSERT INTO cars(brand, name, year, engine, image_url) VALUES ("Koenigsegg", "CC850", 2023, "5.0L, V8, benzinmotor", "https://i.pinimg.com/originals/29/4a/d0/294ad097c1f9a1b0431e0b818e907691.jpg");
INSERT INTO cars(brand, name, year, engine, image_url) VALUES ("Koenigsegg", "Jesko", 2020, "5.0L, V8, benzinmotor", "https://www.carpixel.net/w/78691aeeb584154d6d6b6dbf805199e7/koenigsegg-jesko-absolut-wallpaper-hd-98482.jpg");
INSERT INTO cars(brand, name, year, engine, image_url) VALUES ("Koenigsegg", "Gemera", 2020 , "2.0L, háromhengeres hibrid", "https://elektromosauto.hu/wp-content/uploads/2020/03/Koenigsegg-Gemera-01.jpg");
INSERT INTO cars(brand, name, year, engine, image_url) VALUES ("Koenigsegg", "Jesko Absolut", 2021, "5.0L, ikerturbós V8", "https://www.supercars.net/blog/wp-content/uploads/2019/04/Jesko2.jpg");