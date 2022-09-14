import { Component } from "react";
import { Card } from "react-bootstrap";
import hsbookarray from "../books (1)/history.json"



class Comments extends Component{
    

    state = {
        bookcomments : []
    }

    
  componentDidMount(){
    this.fetching();
   
  }
 fetching=() => {
    fetch('https://striveschool-api.herokuapp.com/api/comments/'+hsbookarray[0].asin,{
      method: "GET",
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA3N2UxNDFlYjc2ZDAwMTUxNTAxOGIiLCJpYXQiOjE2NjI5ODY3NzUsImV4cCI6MTY2NDE5NjM3NX0.w9u8bk8XX0B629ulfztkq5RsDjYAYN_9i3iJuXZrCcc"
    }})
    .then(Response => Response.json())
    .then(data => {
        this.setState({
            bookcomments : data
        })
        console.log(this.state)
        console.log(hsbookarray)
    });
  }





    render(){
        return(
            <>
           
                 <Card>
                 <Card.Body>
                   <Card.Title>{hsbookarray[0].author}</Card.Title>
                   <Card.Subtitle className="mb-2 text-muted">rating: {hsbookarray[0].rate}</Card.Subtitle>
                   <Card.Text>{hsbookarray[0].comment}</Card.Text>
                   <Card.Link >book  {/* {this.props.commented(hsbookarray[0].asin)} */}</Card.Link>
                 </Card.Body>
               </Card>
          
            </>
        
        )
    }
}
export default Comments