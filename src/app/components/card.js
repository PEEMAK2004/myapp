import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
export default function CardsPage() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Card Page</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <Image src="/card1.png" className="card-img-top" alt="Card 1" width={300} height={300} />
            <div className="card-body">
              <h5 className="card-title">Card Title 1</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <Image src="/card2.png" className="card-img-top" alt="Card 2" width={300} height={300} />
            <div className="card-body">
              <h5 className="card-title">Card Title 2</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <Image src="/card3.png" className="card-img-top" alt="Card 3" width={300} height={300} />
            <div className="card-body">
              <h5 className="card-title">Card Title 3</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}