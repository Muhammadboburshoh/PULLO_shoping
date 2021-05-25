insert into products(
  product_name,
  product_price,
  product_rating,
  product_photo,
  product_new
)
values
  ('Men Sports', 90, 5, 'shoes-img1.png', true),
  ('Men Sports', 90, 5, 'shoes-img2.png', true),
  ('Sale JOGING SHOES', 100, 10, 'shoes-img3.png', true),
  ('Best Shoes', 60, 5, 'shoes-img4.png', false),
  ('Best Shoes', 100, 5, 'shoes-img5.png', false),
  ('Best Shoes', 900, 5, 'shoes-img6.png', false),
  ('Sports Shoes', 70, 5, 'shoes-img7.png', false),
  ('Sports Shoes', 100, 5, 'shoes-img8.png', false),
  ('Sports Shoes', 90, 5, 'shoes-img9.png', false);

insert into products(
  product_name,
  product_price,
  product_rating,
  product_photo,
  product_new
)
values
  ('Men''s Like Plex', 100, 15, 'running-shoes.png', false);

update products set product_summary = 'ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
where
  product_id = 10;