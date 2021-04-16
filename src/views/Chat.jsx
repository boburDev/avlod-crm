import React from 'react'
import { Link } from "react-router-dom";
// Redirect
import {
    Button,
    // Card,
    // CardHeader,
    // CardBody,
    // FormGroup,
    // Form,
    // Input,
    Row,
    Col,
} from "reactstrap";
// import axios from 'axios'
// import { useApi } from 'api/api' 

export default function Chat() {
    const [addActive, setAddActive] = React.useState(false)
    return (
        <>
            <div className="content">
                <Row>
                    <div id="wrapper">
                        <nav id="sidebar" className={`${addActive ? 'active' : ''}`}>
                            <div className="sidebar-header">
                                <h3>Users List</h3>
                            </div>
                            <ul className="list-unstyled components">
                                <p>Dummy Heading</p>
                                <li>
                                    About
                                </li>
                                <li>
                                    Portfolio
                                </li>
                                <li>
                                    Contact
                                </li>
                            </ul>
                        </nav>
                        <div id="content">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <div className="container-fluid">

                                    <Button type="button" id="sidebarCollapse" className="btn btn-info" onClick={()=>setAddActive(!addActive)}>
                                        <i className="fas fa-align-left"></i>
                                    </Button>
                                    <Button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <i className="fas fa-align-justify"></i>
                                    </Button>

                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="nav navbar-nav ml-auto" style={{display: 'none'}}>
                                            <li className="nav-item active">
                                                <Link className="nav-link" to="#">Page</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#">Page</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#">Page</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#">Page</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                            <div className="container-fluid ">
                            <Row>
                                <Col md="12" className="chat_body" style={{backgroundColor: '#fff'}}>
                                    <div className="text_wrapper">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit animi nesciunt asperiores minus iusto voluptates rem ratione nostrum maiores, ipsam vero ut eum voluptatibus similique quaerat, dignissimos officia magni modi laboriosam dolore rerum eligendi blanditiis nemo pariatur? Cumque, amet quidem? Cumque illo dolore et ex assumenda enim, incidunt repellendus, iure corrupti exercitationem deserunt. Excepturi hic earum dolore amet nemo ducimus labore est et perferendis soluta nam ipsa quibusdam quas, in possimus. Odio sequi, impedit harum quo quidem, minus amet deleniti doloribus fugit eligendi laboriosam temporibus. Porro aliquam, atque accusamus harum explicabo odio perferendis ad quam libero repudiandae voluptatem laudantium aperiam placeat debitis eveniet exercitationem sunt. Incidunt, fugit. Cumque beatae dolorem alias fugiat tempora laborum voluptates quod praesentium velit commodi vel quasi itaque ullam, ea illum doloribus placeat, molestiae porro adipisci fuga inventore modi aspernatur! Alias est consectetur consequuntur ipsum. Fugiat ut inventore ipsum cumque autem eligendi excepturi unde, vero non corporis suscipit eveniet adipisci libero accusamus eum, id sequi? Perferendis assumenda, soluta voluptatum rem corporis error dolor alias omnis animi, explicabo sunt non iste aliquam. Pariatur eius autem similique sequi quasi quaerat atque, cum eos tempora repellat deserunt laborum expedita dolorum optio sed nesciunt, corporis ipsum quae eaque architecto saepe impedit accusamus! Quaerat modi tempora dicta rerum minus doloribus quam officiis nemo, culpa consectetur fuga, a iusto ipsa architecto placeat ducimus, aperiam reprehenderit voluptates. Laboriosam minus velit voluptas beatae alias! Asperiores nobis ex explicabo iure id, nemo porro sequi assumenda consectetur laborum unde ea voluptate voluptatibus maiores, deleniti debitis esse placeat, quisquam nihil. Eos possimus sunt omnis accusamus maiores. Harum recusandae magnam consectetur soluta accusamus dolores, minus vero repellendus ipsum cumque modi iusto. Commodi fugit delectus sint quibusdam obcaecati ex quo, tempore odit odio rem, voluptas, beatae doloribus fuga. Nobis corporis id pariatur, vero repellat ullam doloribus atque nostrum earum eius eaque doloremque laboriosam tenetur at accusamus voluptas nisi! Corporis assumenda harum eum expedita, dicta illum? Ipsum voluptate quae nesciunt, asperiores fugiat quasi facere qui eius dolor sit dolorem dignissimos! Blanditiis dignissimos fugiat unde aliquam cum dolorum corrupti velit sit accusantium, perferendis neque totam hic veniam officia commodi reiciendis natus, porro, fuga repudiandae ullam exercitationem distinctio at. Sit obcaecati, saepe sint recusandae accusamus facilis soluta sed tenetur ea. Non tempore quam veritatis sapiente qui voluptatum fugiat voluptates! Quo deleniti delectus minus voluptatem ad quas tempore amet nobis quasi laborum veritatis vel quia expedita doloribus aliquam fugiat, alias nisi illum eveniet hic neque. At perferendis eligendi eaque ex eius atque. Illum distinctio possimus, et at sunt error quam sapiente nihil odit nesciunt natus debitis quod animi nemo incidunt aliquam blanditiis excepturi laborum, sit amet. Expedita, cumque! Velit placeat minima, facilis deserunt magni et itaque possimus cumque ullam iure molestiae nesciunt reprehenderit sunt reiciendis eius provident, sit dolores inventore dolorem at perferendis. Eaque sunt quaerat, in, ex sint voluptatem minus eveniet quo eum alias autem? Placeat quo consectetur illum rerum quibusdam impedit corporis? Itaque, ut commodi expedita veniam repellat facilis, dignissimos dolorum fugit ratione placeat, fuga quam quis in. Laborum, molestias ea voluptatum architecto dicta quidem non est, facilis illum deleniti corporis debitis nobis maxime dolorum officiis? Eos sed pariatur doloribus dolor. Perspiciatis impedit veniam veritatis facilis itaque culpa, illum illo sapiente, cumque eius est blanditiis reiciendis nostrum possimus sed debitis iure rem quia maxime temporibus. Unde asperiores assumenda magni eligendi sapiente a ratione quibusdam architecto laudantium temporibus, vero tenetur et dolorum quos repudiandae qui ex debitis totam esse delectus commodi voluptas quis consequuntur tempore. Libero eligendi adipisci voluptatum? Impedit eveniet neque consequatur voluptates earum, non quaerat soluta alias voluptatibus corrupti cumque, modi architecto qui quasi quisquam laborum nisi. Accusantium, non rem laborum deserunt quia minus. Facere aspernatur ut incidunt atque tempore veniam expedita delectus itaque nam porro! Alias eius porro labore ex ipsam, eaque quam velit maiores accusamus, totam fugit harum sunt recusandae nulla asperiores consequuntur! Doloremque dolor id dicta eaque porro eius sunt fuga eveniet natus eum corrupti, sapiente fugit exercitationem dolorem facere sequi ducimus tenetur culpa? Hic deserunt eum officia et sapiente maiores! Voluptatum, repudiandae iusto aut est ipsum ipsam unde eveniet aliquid vitae omnis incidunt modi, possimus blanditiis. Ipsum sed, quidem repellendus error cumque iure ipsam ex dolor magnam ullam. Magnam illo commodi molestiae sed voluptatum? Sint, ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deserunt totam eius pariatur iste. Non ut voluptatum maxime reiciendis. Et incidunt in iste harum eos. Illo unde iusto sint maiores omnis possimus cumque magni incidunt minima, totam officiis nulla fugiat hic vero quis molestias veniam beatae atque nihil nobis numquam.
                                    </div>
                                    <div className="chat_footer">
                                        <Row>
                                            <Col md="12">
                                                <textarea className="chat_keyboard" cols="30" rows="4" placeholder="Message"></textarea>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                            </div>

                        </div>
                    </div>
                </Row>
            </div>
        </>
    )
}