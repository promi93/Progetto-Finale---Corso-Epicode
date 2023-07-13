import React from "react";

// const HomePage = () => {
//   const GameCard = ({ title, description, price, imageUrl }) => {
//     return (
//       <Card className="game-card">
//         <Card.Img variant="top" src={imageUrl} />
//         <Card.Body>
//           <Card.Title>{title}</Card.Title>
//           <Card.Text>{description}</Card.Text>
//           <Card.Text className="price">Price: ${price}</Card.Text>
//           <Button variant="primary">Add to Cart</Button>
//         </Card.Body>
//       </Card>
//     );
//   };
//   const games = [
//     {
//       title: "Game 1",
//       description: "Description of Game 1",
//       price: 19.99,
//       imageUrl: "game1.jpg",
//     },
//     {
//       title: "Game 2",
//       description: "Description of Game 2",
//       price: 24.99,
//       imageUrl: "game2.jpg",
//     },
//     // Add more game objects as needed
//   ];

//   return (
//     <Container to="/home">
//       <h1 className="title">Welcome to the Board Game Store</h1>
//       <Row>
//         {games.map((game, index) => (
//           <Col key={index} className="game-col">
//             <GameCard
//               title={game.title}
//               description={game.description}
//               price={game.price}
//               imageUrl={game.imageUrl}
//             />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default HomePage;

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function HomePage() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default HomePage;
