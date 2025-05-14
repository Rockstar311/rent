import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1747160076197 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      queryRunner.query(`
        INSERT INTO "Property" (id, name, description, longitude, latitude, price, "createdAt", "updatedAt")
        VALUES
          ('56480759-b8cf-4a97-95ef-7cc2c46ff167', 'Placeat eaque occaecati.', 'Et aut id numquam ullam vero.', 23.144632, 49.760208, 1984, '2025-05-13T18:12:35.893898', '2025-05-13T18:12:35.893898'),
          ('cf20178c-083e-413d-a8a1-1f5474560729', 'Laborum labore nulla.', 'Reiciendis dolorum deserunt reiciendis quae sed nam. Doloremque omnis facilis nemo.', 23.524601, 49.614128, 905, '2025-05-13T18:12:35.894017', '2025-05-13T18:12:35.894017'),
          ('223fb530-cfc0-4f92-bd93-6a3fe7ee5eef', 'Temporibus ad.', 'Mollitia impedit praesentium laborum.', 23.658429, 49.127542, 1748, '2025-05-13T18:12:35.894090', '2025-05-13T18:12:35.894090'),
          ('1dc62526-1638-4767-8f08-df2aea075f13', 'Ad architecto.', 'Consectetur vero exercitationem numquam tempora dicta repellat.', 23.728021, 49.275534, 2174, '2025-05-13T18:12:35.894173', '2025-05-13T18:12:35.894173'),
          ('7b11c2b4-644c-42d6-9bba-e312a5dbcd55', 'Accusantium voluptate nobis.', 'Nesciunt ducimus esse. Non itaque dolor eius deserunt libero.', 24.032001, 48.941893, 1129, '2025-05-13T18:12:35.894255', '2025-05-13T18:12:35.894255'),
          ('ca77f260-2d61-4e79-9e51-61408cf7fb02', 'Esse labore.', 'Expedita unde temporibus ullam.', 24.568373, 48.855196, 1108, '2025-05-13T18:12:35.894319', '2025-05-13T18:12:35.894319'),
          ('263c9f7c-613d-401c-b8ae-bb5efcdeb0d9', 'Debitis.', 'Quis totam vero ut quo.', 24.687403, 49.976854, 1837, '2025-05-13T18:12:35.894383', '2025-05-13T18:12:35.894383'),
          ('97bd92a0-4216-40de-84e4-05c39c4f4d83', 'Neque quia iure.', 'Quos sed nam nulla.', 24.755831, 49.780469, 1800, '2025-05-13T18:12:35.894466', '2025-05-13T18:12:35.894466'),
          ('d6b68405-8af7-4bf6-a519-dc1108876221', 'Nemo quam.', 'Eius eos vitae rem non dignissimos et.', 24.125695, 49.078936, 958, '2025-05-13T18:12:35.894638', '2025-05-13T18:12:35.894638'),
          ('84551665-f2e3-4797-819f-aa43142601f3', 'Doloremque in.', 'Aliquid harum velit ex. Explicabo architecto corrupti accusamus.', 23.315258, 48.922023, 860, '2025-05-13T18:12:35.894724', '2025-05-13T18:12:35.894724'),
          ('a10a9d87-8c8b-44be-bdf8-888fc1c26e4a', 'Ipsam voluptas.', 'Voluptate beatae minima quos iure debitis at.', 24.93546, 49.354468, 1935, '2025-05-13T18:12:35.894788', '2025-05-13T18:12:35.894788'),
          ('372dd658-9292-4284-bb96-5f7ba654ec2a', 'Eligendi repellendus.', 'Aspernatur magnam ratione aliquam. Vero quo beatae hic doloremque.', 24.477923, 49.686557, 1891, '2025-05-13T18:12:35.894860', '2025-05-13T18:12:35.894860'),
          ('0adeae6b-f561-4d4d-9586-a6fdbdcf1c8a', 'Quae ratione amet quae.', 'Sit natus earum quaerat.', 24.504637, 49.076502, 901, '2025-05-13T18:12:35.894926', '2025-05-13T18:12:35.894926'),
          ('f6446abc-a338-44bf-be74-6d5705700a5b', 'Animi nesciunt voluptatum.', 'Laudantium maiores suscipit. Numquam voluptatum facere.', 23.488382, 48.874056, 1540, '2025-05-13T18:12:35.895002', '2025-05-13T18:12:35.895002'),
          ('c7ae5e2e-0c40-4341-b82c-47ef13fc7dde', 'Debitis quis porro.', 'Possimus vero necessitatibus magnam corporis.', 24.275056, 49.977646, 2026, '2025-05-13T18:12:35.895072', '2025-05-13T18:12:35.895072'),
          ('da3e392c-9537-4819-ab45-7a022d495f6b', 'Perferendis nulla.', 'Reiciendis qui nulla voluptatibus. Odio fugit ipsum illo culpa accusantium.', 24.812215, 49.602852, 1953, '2025-05-13T18:12:35.895157', '2025-05-13T18:12:35.895157'),
          ('5b1dc1bd-e351-4571-b922-c40f95b69303', 'Vel blanditiis optio.', 'Dolorum repellat debitis consectetur suscipit reprehenderit in. Labore similique aut ut minima laudantium.', 24.710362, 49.060123, 1124, '2025-05-13T18:12:35.895206', '2025-05-13T18:12:35.895206'),
          ('5bc4708a-cb27-4304-ac24-f69a4e424180', 'Voluptatibus aspernatur vel.', 'A sequi fugit nisi illum optio.', 23.779147, 49.169056, 1485, '2025-05-13T18:12:35.895250', '2025-05-13T18:12:35.895250'),
          ('3c4ccdc7-fff7-48e8-946a-8a05564ab01e', 'Quo doloremque.', 'Eligendi modi sint esse praesentium nisi tempora. Ullam cumque porro unde.', 23.479563, 49.551202, 1232, '2025-05-13T18:12:35.895442', '2025-05-13T18:12:35.895442'),
          ('47b1fb9a-a4b9-483f-883f-15d5af9982a0', 'Blanditiis perspiciatis minus ea.', 'Dignissimos et mollitia dolor. Voluptatibus earum beatae repellat fugiat distinctio impedit.', 24.52715, 49.589904, 1240, '2025-05-13T18:12:35.895538', '2025-05-13T18:12:35.895538'),
          ('86caaa87-504f-4e96-a3bd-6b340af21280', 'Optio.', 'Ad quas vitae.', 23.719963, 49.200615, 2129, '2025-05-13T18:12:35.895598', '2025-05-13T18:12:35.895598'),
          ('69fe04bf-f9d0-441a-9a80-321cb3e9fd2b', 'Quod quisquam.', 'Placeat perspiciatis ullam voluptate occaecati vero. Voluptatem ut laudantium est.', 23.729772, 48.827226, 919, '2025-05-13T18:12:35.895655', '2025-05-13T18:12:35.895655'),
          ('314239dd-f2be-4c52-94aa-06c7ebab424a', 'Ab ducimus rem.', 'Quaerat deserunt excepturi debitis.', 24.928084, 49.325541, 1130, '2025-05-13T18:12:35.895712', '2025-05-13T18:12:35.895712'),
          ('92a6dee1-07ec-474c-8ec0-85e98604e649', 'Itaque consectetur ipsam.', 'Quas adipisci itaque laboriosam eaque blanditiis voluptatum velit.', 24.020778, 49.92733, 1081, '2025-05-13T18:12:35.895766', '2025-05-13T18:12:35.895766'),
          ('17e22443-8679-4f94-9aa7-d248703ea038', 'Quae qui veritatis similique.', 'Perspiciatis inventore commodi minima eum.', 24.037349, 49.12387, 1291, '2025-05-13T18:12:35.895829', '2025-05-13T18:12:35.895829'),
          ('cc8810de-4379-4797-a574-2bc7c2e06a6e', 'Necessitatibus excepturi.', 'Eius nostrum cumque. Fugiat voluptatum cumque laboriosam vel aliquam corrupti dolor.', 24.967669, 49.061908, 1585, '2025-05-13T18:12:35.895907', '2025-05-13T18:12:35.895907'),
          ('56add866-2f52-453e-ba16-d960856b7fca', 'Velit quod molestiae in.', 'Modi accusamus voluptatem. Quibusdam veritatis facilis quisquam vero ullam recusandae.', 23.782985, 49.099183, 2046, '2025-05-13T18:12:35.895967', '2025-05-13T18:12:35.895967'),
          ('8f31f9b5-2fd5-448e-9ce5-d9dcde31923d', 'Neque.', 'Fugiat eos consequuntur hic reprehenderit culpa nobis.', 24.905564, 49.245229, 1157, '2025-05-13T18:12:35.896032', '2025-05-13T18:12:35.896032'),
          ('28bd52e6-65ea-48a9-a68a-a5e429cc8172', 'Officia quo iste.', 'Sequi delectus animi laudantium. Minus ea eos.', 23.862415, 49.610791, 1886, '2025-05-13T18:12:35.896095', '2025-05-13T18:12:35.896095'),
          ('4f9e46d1-8806-467e-ad0b-b6e1148e6742', 'Molestiae quo autem quasi.', 'Rerum quibusdam asperiores.', 24.548006, 49.534913, 1346, '2025-05-13T18:12:35.896141', '2025-05-13T18:12:35.896141'),
          ('959192b6-632a-4d42-a088-fa89d4a5c9c9', 'Dignissimos tenetur explicabo.', 'Sed porro repellendus quam voluptate occaecati cupiditate. Officiis totam iure.', 23.561769, 49.694024, 1744, '2025-05-13T18:12:35.896324', '2025-05-13T18:12:35.896324'),
          ('bebe6a4e-fb6a-4c47-9922-8c3d4c59ced0', 'Ullam cupiditate beatae.', 'Aut inventore autem perspiciatis. Architecto quibusdam itaque sed cumque amet.', 24.476921, 49.054736, 1643, '2025-05-13T18:12:35.896431', '2025-05-13T18:12:35.896431'),
          ('6b45e947-7cd4-4b84-96bf-59e4f3678be2', 'Magni error nam.', 'Officiis est consequatur expedita incidunt officiis architecto.', 24.482037, 49.119488, 1175, '2025-05-13T18:12:35.896512', '2025-05-13T18:12:35.896512'),
          ('a61309c8-8118-4f76-99f3-ad5467ee1d51', 'Delectus nam ea fugit.', 'Earum nostrum dolores perspiciatis ut.', 23.740829, 49.370528, 2008, '2025-05-13T18:12:35.896694', '2025-05-13T18:12:35.896694'),
          ('4af60cbd-3a2a-4694-b39c-ab3480ccd6ec', 'Iste aliquid.', 'Iure ratione sapiente. Asperiores eveniet eligendi porro a quae eius.', 23.562101, 49.967811, 1919, '2025-05-13T18:12:35.896781', '2025-05-13T18:12:35.896781'),
          ('e642bc67-5b5a-4ecd-85ff-37ed8c1c7208', 'Deserunt eligendi nostrum.', 'Eveniet perferendis est sequi aperiam perferendis quo. Expedita ducimus vitae natus voluptatem.', 23.039295, 48.869466, 1177, '2025-05-13T18:12:35.896934', '2025-05-13T18:12:35.896934'),
          ('b52a3718-cf39-4555-8691-98a6a69fd5e4', 'Accusantium autem eveniet.', 'Consequatur quis officiis corrupti quibusdam cumque error.', 23.56769, 49.147204, 1999, '2025-05-13T18:12:35.897005', '2025-05-13T18:12:35.897005'),
          ('2233f8b2-db7b-4625-ad81-31182d9ce3b7', 'Dolorum earum neque.', 'Omnis neque blanditiis autem nostrum adipisci animi. Iusto aliquam neque repellat.', 23.538842, 48.92327, 1175, '2025-05-13T18:12:35.897058', '2025-05-13T18:12:35.897058'),
          ('bc2dcabf-ec9f-4b9a-b664-410a822b25f5', 'Nesciunt blanditiis eaque.', 'Harum architecto voluptate laudantium corporis.', 24.184358, 49.999346, 1100, '2025-05-13T18:12:35.897105', '2025-05-13T18:12:35.897105'),
          ('f41c972f-2990-4838-bedd-45303592e825', 'Nobis culpa officiis.', 'Atque minus maxime enim. Dolores assumenda molestiae expedita voluptatibus doloremque sint omnis.', 24.582234, 49.160439, 850, '2025-05-13T18:12:35.897171', '2025-05-13T18:12:35.897171'),
          ('b2b9174e-c59e-454d-9f4c-fa3257f2c4cb', 'Ullam sint.', 'Natus libero maiores molestiae. Dignissimos ratione consectetur quidem.', 23.724313, 49.659494, 1590, '2025-05-13T18:12:35.897230', '2025-05-13T18:12:35.897230'),
          ('d86f49ba-7588-479b-af5b-9cfdfb2043f7', 'Nam aliquam non.', 'Modi commodi est labore.', 24.838121, 49.995261, 1297, '2025-05-13T18:12:35.897289', '2025-05-13T18:12:35.897289'),
          ('a94d5d8d-e161-48d7-bfd1-928528938bab', 'Aliquam placeat.', 'Eius recusandae similique voluptas corporis.', 23.086943, 49.375629, 1575, '2025-05-13T18:12:35.897333', '2025-05-13T18:12:35.897333'),
          ('dfbef738-2462-40b9-b1f0-8eceb9f7f22b', 'Eius.', 'Culpa quae quae.', 23.900604, 49.629191, 1787, '2025-05-13T18:12:35.897376', '2025-05-13T18:12:35.897376'),
          ('b8879b07-417a-4073-a71f-9e1150ab696b', 'Temporibus earum.', 'Tempore a necessitatibus error vel tempora suscipit. Quas laborum eos necessitatibus blanditiis officia sapiente.', 23.914848, 49.16654, 1735, '2025-05-13T18:12:35.897425', '2025-05-13T18:12:35.897425'),
          ('ccbf3937-ee67-41b9-8ea2-3f4a4493af59', 'Hic accusamus.', 'Dolor esse sit. Iure cum maxime perferendis mollitia nostrum nemo.', 23.031684, 49.168078, 1263, '2025-05-13T18:12:35.897470', '2025-05-13T18:12:35.897470'),
          ('d10187af-8bea-444f-9a22-c1f16c142014', 'Mollitia maxime laborum.', 'Facilis occaecati dolores dolorum aliquid minima consequuntur. Optio in dolore nisi.', 24.365662, 49.80754, 2028, '2025-05-13T18:12:35.897538', '2025-05-13T18:12:35.897538'),
          ('48b068ae-d5e6-4bdf-8226-a7dd2bdd83ad', 'Sapiente sint nulla.', 'Accusamus deserunt deleniti debitis velit a rem nisi.', 24.477075, 48.88272, 2080, '2025-05-13T18:12:35.897582', '2025-05-13T18:12:35.897582'),
          ('b85d0dee-430d-4995-b1ce-d6fb08acdbc9', 'Voluptates quo.', 'Exercitationem corrupti at.', 23.662991, 49.270709, 1269, '2025-05-13T18:12:35.897624', '2025-05-13T18:12:35.897624'),
          ('f6444d6d-2525-4b4d-ad5b-0c6dba499b67', 'Expedita veritatis.', 'Ratione magnam at.', 24.249956, 49.673951, 1023, '2025-05-13T18:12:35.897670', '2025-05-13T18:12:35.897670');
      `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
