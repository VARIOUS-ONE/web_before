import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProductDetails, createProductReview } from '../actions/productActions'
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'
import ReactWordcloud from 'react-wordcloud'

function ProductScreen({ match, history }) {
    const [qty, setQty] = useState(1)
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')
    
    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const productReviewCreate = useSelector(state => state.productReviewCreate)
    const {
        loading: loadingProductReview,
        error: errorProductReview,
        success: successProductReview,
    } = productReviewCreate

    const options = {
        rotations: 2,
        rotationAngles: [-90, 0],
    }
    const size = [400, 300];
    const words = [
        {
            text: 'told',
            value: 64,
          },
          {
            text: 'mistake',
            value: 11,
          },
          {
            text: 'thought',
            value: 16,
          },
          {
            text: 'bad',
            value: 17,
          },
          {
            text: 'correct',
            value: 10,
          },
          {
            text: 'day',
            value: 54,
          },
          {
            text: 'prescription',
            value: 12,
          },
          {
            text: 'time',
            value: 77,
          },
          {
            text: 'thing',
            value: 45,
          },
          {
            text: 'left',
            value: 19,
          },
          {
            text: 'pay',
            value: 13,
          },
          {
            text: 'people',
            value: 32,
          },
          {
            text: 'month',
            value: 22,
          },
          {
            text: 'again',
            value: 35,
          },
          {
            text: 'review',
            value: 24,
          },
          {
            text: 'call',
            value: 38,
          },
          {
            text: 'doctor',
            value: 70,
          },
          {
            text: 'asked',
            value: 26,
          },
          {
            text: 'finally',
            value: 14,
          },
          {
            text: 'insurance',
            value: 29,
          },
          {
            text: 'week',
            value: 41,
          },
          {
            text: 'called',
            value: 49,
          },
          {
            text: 'problem',
            value: 20,
          },
          {
            text: 'going',
            value: 59,
          },
          {
            text: 'help',
            value: 49,
          },
          {
            text: 'felt',
            value: 45,
          },
          {
            text: 'discomfort',
            value: 11,
          },
          {
            text: 'lower',
            value: 22,
          },
          {
            text: 'severe',
            value: 12,
          },
          {
            text: 'free',
            value: 38,
          },
          {
            text: 'better',
            value: 54,
          },
          {
            text: 'muscle',
            value: 14,
          },
          {
            text: 'neck',
            value: 41,
          },
          {
            text: 'root',
            value: 24,
          },
          {
            text: 'adjustment',
            value: 16,
          },
          {
            text: 'therapy',
            value: 29,
          },
          {
            text: 'injury',
            value: 20,
          },
          {
            text: 'excruciating',
            value: 10,
          },
          {
            text: 'chronic',
            value: 13,
          },
          {
            text: 'chiropractor',
            value: 35,
          },
          {
            text: 'treatment',
            value: 59,
          },
          {
            text: 'tooth',
            value: 32,
          },
          {
            text: 'chiropractic',
            value: 17,
          },
          {
            text: 'dr',
            value: 77,
          },
          {
            text: 'relief',
            value: 19,
          },
          {
            text: 'shoulder',
            value: 26,
          },
          {
            text: 'nurse',
            value: 17,
          },
          {
            text: 'room',
            value: 22,
          },
          {
            text: 'hour',
            value: 35,
          },
          {
            text: 'wait',
            value: 38,
          },
          {
            text: 'hospital',
            value: 11,
          },
          {
            text: 'eye',
            value: 13,
          },
          {
            text: 'test',
            value: 10,
          },
          {
            text: 'appointment',
            value: 49,
          },
          {
            text: 'medical',
            value: 19,
          },
          {
            text: 'question',
            value: 20,
          },
          {
            text: 'office',
            value: 64,
          },
          {
            text: 'care',
            value: 54,
          },
          {
            text: 'minute',
            value: 29,
          },
          {
            text: 'waiting',
            value: 16,
          },
          {
            text: 'patient',
            value: 59,
          },
          {
            text: 'health',
            value: 49,
          },
          {
            text: 'alternative',
            value: 24,
          },
          {
            text: 'holistic',
            value: 19,
          },
          {
            text: 'traditional',
            value: 20,
          },
          {
            text: 'symptom',
            value: 29,
          },
          {
            text: 'internal',
            value: 17,
          },
          {
            text: 'prescribed',
            value: 26,
          },
          {
            text: 'acupuncturist',
            value: 16,
          },
          {
            text: 'pain',
            value: 64,
          },
          {
            text: 'integrative',
            value: 10,
          },
          {
            text: 'herb',
            value: 13,
          },
          {
            text: 'sport',
            value: 22,
          },
          {
            text: 'physician',
            value: 41,
          },
          {
            text: 'herbal',
            value: 11,
          },
          {
            text: 'eastern',
            value: 12,
          },
          {
            text: 'chinese',
            value: 32,
          },
          {
            text: 'acupuncture',
            value: 45,
          },
          {
            text: 'prescribe',
            value: 14,
          },
          {
            text: 'medication',
            value: 38,
          },
          {
            text: 'western',
            value: 35,
          },
          {
            text: 'sure',
            value: 38,
          },
          {
            text: 'work',
            value: 64,
          },
          {
            text: 'smile',
            value: 17,
          },
          {
            text: 'teeth',
            value: 26,
          },
          {
            text: 'pair',
            value: 11,
          },
          {
            text: 'wanted',
            value: 20,
          },
          {
            text: 'frame',
            value: 13,
          },
          {
            text: 'lasik',
            value: 10,
          },
          {
            text: 'amazing',
            value: 41,
          },
          {
            text: 'fit',
            value: 14,
          },
          {
            text: 'happy',
            value: 22,
          },
          {
            text: 'feel',
            value: 49,
          },
          {
            text: 'glasse',
            value: 19,
          },
          {
            text: 'vision',
            value: 12,
          },
          {
            text: 'pressure',
            value: 16,
          },
          {
            text: 'find',
            value: 29,
          },
          {
            text: 'experience',
            value: 59,
          },
          {
            text: 'year',
            value: 70,
          },
          {
            text: 'massage',
            value: 35,
          },
          {
            text: 'best',
            value: 54,
          },
          {
            text: 'mouth',
            value: 20,
          },
          {
            text: 'staff',
            value: 64,
          },
          {
            text: 'gum',
            value: 10,
          },
          {
            text: 'chair',
            value: 12,
          },
          {
            text: 'ray',
            value: 22,
          },
          {
            text: 'dentistry',
            value: 11,
          },
          {
            text: 'canal',
            value: 13,
          },
          {
            text: 'procedure',
            value: 32,
          },
          {
            text: 'filling',
            value: 26,
          },
          {
            text: 'gentle',
            value: 19,
          },
          {
            text: 'cavity',
            value: 17,
          },
          {
            text: 'crown',
            value: 14,
          },
          {
            text: 'cleaning',
            value: 38,
          },
          {
            text: 'hygienist',
            value: 24,
          },
          {
            text: 'dental',
            value: 59,
          },
          {
            text: 'charge',
            value: 24,
          },
          {
            text: 'cost',
            value: 29,
          },
          {
            text: 'charged',
            value: 13,
          },
          {
            text: 'spent',
            value: 17,
          },
          {
            text: 'paying',
            value: 14,
          },
          {
            text: 'pocket',
            value: 12,
          },
          {
            text: 'dollar',
            value: 11,
          },
          {
            text: 'business',
            value: 32,
          },
          {
            text: 'refund',
            value: 10,
          },
      ]
    
    const callbacks = {
        getWordColor: word => word.value > 50 ? "blue" : "red",
        onWordClick: console.log,
        onWordMouseOver: console.log,
        getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
    }
    const lists = []

    useEffect(() => {
        if (successProductReview) {
            setRating(0)
            setComment('')
            dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
        }

        dispatch(listProductDetails(match.params.id))

    }, [dispatch, match, successProductReview])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createProductReview(
            match.params.id, {
            rating,
            comment
        }
        ))
    }

    return (
        <div>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            {loading ?
                <Loader />
                : error
                    ? <Message variant='danger'>{error}</Message>
                    : (
                        <div>
                            <Row>
                                <Col md={6}>
                                    <Image src={product.image} alt={product.name} fluid />
                                </Col>


                                <Col md={3}>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <h3>{product.name}</h3>
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            Price: ${product.price}
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            Description: {product.description}
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>


                                <Col md={3}>
                                    <Card>
                                        <ListGroup variant='flush'>
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Price:</Col>
                                                    <Col>
                                                        <strong>${product.price}</strong>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Status:</Col>
                                                    <Col>
                                                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>

                                            {product.countInStock > 0 && (
                                                <ListGroup.Item>
                                                    <Row>
                                                        <Col>Qty</Col>
                                                        <Col xs='auto' className='my-1'>
                                                            <Form.Control
                                                                as="select"
                                                                value={qty}
                                                                onChange={(e) => setQty(e.target.value)}
                                                            >
                                                                {

                                                                    [...Array(product.countInStock).keys()].map((x) => (
                                                                        <option key={x + 1} value={x + 1}>
                                                                            {x + 1}
                                                                        </option>
                                                                    ))
                                                                }

                                                            </Form.Control>
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                            )}


                                            <ListGroup.Item>
                                                <Button
                                                    onClick={addToCartHandler}
                                                    className='btn-block'
                                                    disabled={product.countInStock == 0}
                                                    type='button'>
                                                    Add to Cart
                                                </Button>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6}>
                                    <h4>Reviews</h4>
                                    {product.reviews.length === 0 && <Message variant='info'>No Reviews</Message>}

                                    <ListGroup variant='flush'>
                                        {product.reviews.map((review) => (
                                            <ListGroup.Item key={review._id}>
                                                <strong>{review.name}</strong>
                                                <Rating value={review.rating} color='#f8e825' />
                                                <p>{review.createdAt.substring(0, 10)}</p>
                                                <p>{review.comment} </p>
                                                <p>{review.comment == "겁나 별로양 우잉" ? (
                                            <i className='fas fa-check' style={{ color: 'red' }}></i>
                                        ) : (
                                                <i className='fas fa-check' style={{ color: 'green' }}></i>
                                            )}</p>
                                            </ListGroup.Item>
                                        ))}

                                        <ListGroup.Item>
                                            <h4>Write a review</h4>

                                            {loadingProductReview && <Loader />}
                                            {successProductReview && <Message variant='success'>Review Submitted</Message>}
                                            {errorProductReview && <Message variant='danger'>{errorProductReview}</Message>}

                                            {userInfo ? (
                                                <Form onSubmit={submitHandler}>
                                                    <Form.Group controlId='rating'>
                                                        <Form.Label>Rating</Form.Label>
                                                        <Form.Control
                                                            as='select'
                                                            value={rating}
                                                            onChange={(e) => setRating(e.target.value)}
                                                        >
                                                            <option value=''>Select...</option>
                                                            <option value='1'>1 - Poor</option>
                                                            <option value='2'>2 - Fair</option>
                                                            <option value='3'>3 - Good</option>
                                                            <option value='4'>4 - Very Good</option>
                                                            <option value='5'>5 - Excellent</option>
                                                        </Form.Control>
                                                    </Form.Group>

                                                    <Form.Group controlId='comment'>
                                                        <Form.Label>Review</Form.Label>
                                                        <Form.Control
                                                            as='textarea'
                                                            row='5'
                                                            value={comment}
                                                            onChange={(e) => setComment(e.target.value)}
                                                            lists ={comment}
                                                        ></Form.Control>
                                                    </Form.Group>

                                                    <Button
                                                        disabled={loadingProductReview}
                                                        type='submit'
                                                        variant='primary'
                                                    >
                                                        Submit
                                                    </Button>

                                                </Form>
                                            ) : (
                                                    <Message variant='info'>Please <Link to='/login'>login</Link> to write a review</Message>
                                                )}
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                                
                                <Col md={6}>
                                    <h4>워드클라우드</h4>
                                    <ReactWordcloud
                                        callbacks={callbacks}
                                        options={options}
                                        size={size}
                                        words={words}/>               
                                    
                                </Col>
                            
                            </Row>
                        </div>
                    )

            }


        </div >
    )
}

export default ProductScreen
