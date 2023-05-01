import React, { useState } from "react";
import axios from "axios";
import { ExpandMore } from "@material-ui/icons";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import { Modal } from "react-responsive-modal";
import { Avatar, Button } from "@material-ui/core";
import { token } from "../../Utils/decodedToken";
import { successModal } from "../../Utils/AlertModal";
import { useSelector } from "react-redux";


export const AddQuestion = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [input, setInput] = useState("");
    const [inputUrl, setInputUrl] = useState("");
    const userLogin = useSelector((state) => state.userLogin);

    const handleQuestion = async (e) => {
        e.preventDefault();
        const config = {
            headers: {
                "Content-Type": "application/json",
                authorization: token,
            },
        };
        if (input !== "") {
            const body = {
                questionName: input,
                questionUrl: inputUrl,
                userId: userLogin?.userInfo?.userId
            };
            await axios
                .post("/api/questions", body, config)
                .then((res) => {
                    console.log(res.data);
                    console.log("question added successfully");
                    setIsModalOpen(false);
                    successModal('Question added successfully')
                })
                .catch((err) => {
                    console.log(err);
                });
        }

        setInput("");
        setInputUrl("");
    };
    return (
        <div className='qHeaderButton'>

            <Button onClick={() => setIsModalOpen(true)}>
                {props.title}
            </Button>

            <Modal
                open={isModalOpen}

                onClose={() => setIsModalOpen(false)}
                closeOnEsc
                center
                closeOnOverlayClick={false}
                styles={{
                    overlay: {
                        height: "auto",

                    }
                }}
            >
                <div className='modal_box'>
                    <div className="modal__title">
                        <h5>Add Question</h5>
                        <h5>Share Link</h5>
                    </div>
                    <div className="modal__info">
                        <Avatar className="avatar" />
                        <div className="modal__scope">
                            <p><PeopleAltOutlinedIcon /></p>
                            <p>Public</p>
                            <p><ExpandMore /></p>
                        </div>
                    </div>
                    <div className="modal__Field">
                        <input
                            onChange={(e) => {
                                setInput(e.target.value)
                            }}
                            value={input}
                            type=" text"
                            placeholder="Start your question with 'What', 'How', 'Why', etc. "
                        />
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <input
                                type="text"
                                value={inputUrl}
                                onChange={(e) => setInputUrl(e.target.value)}
                                style={{
                                    margin: "5px 0",
                                    border: "1px solid lightgray",
                                    padding: "10px",
                                    outline: "2px solid #000",
                                }}
                                placeholder="Optional: inclue a link that gives context"
                            />
                            {inputUrl !== "" && <img style={{
                                height: "40vh",
                                objectFit: "contain"
                            }} src={inputUrl} alt="image not found" />}


                        </div>
                    </div>
                    <div className="modal__buttons">
                        <button className="cancle" onClick={() => setIsModalOpen(false)}>
                            Cancel
                        </button>
                        <button type='submit' className='add' onClick={handleQuestion}>
                            Add Question
                        </button>
                    </div>
                </div>
            </Modal>

        </div>
    )
}