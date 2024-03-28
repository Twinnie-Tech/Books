import React from 'react'
import { useState } from 'react'
import { DateTime } from 'luxon';
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { MdEdit } from 'react-icons/md';
import styles from "./NewBook.css?url";
// import { LinksFunction } from '@remix-run/node';
const UpdateBook = () => {
    const [openModal, setOpenModal] = useState(false);
    const [title, setTitle] = useState<string | undefined>("");
    const [author, setAuthor] = useState<string | undefined>("");
    const [description, setDescription] = useState<string | undefined>("");
    const [publishedDate, setPublishedDate] = useState<DateTime | undefined>();
    const onCloseModal = () => {
        setOpenModal(false);
    }
    return (
        <>
            <Button onClick={() => setOpenModal(true)}>
                <MdEdit
                    style={{
                        color: "green",
                        fontSize: "1.5rem"
                    }} />

            </Button>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup className="flex-col justify-center align-center m-auto w-[50%] h-1/2 py-2 bg-amber-100">
                <Modal.Header />
                <Modal.Body className='h-full w-full'>
                    <h3 className="text-center">Update Book Details</h3>
                    <div className="flex-col justify-center align-center m-auto">
                        <div className='flex-col justify-center align-center m-auto'>
                            <div>
                                <Label htmlFor="title" value="title" className='text-black'>Title</Label>
                            </div>
                            <TextInput
                                id="title"
                                placeholder="name@company.com"
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                                required
                            />
                        </div>
                        <div className='flex-col justify-center align-center m-auto'>
                            <div>
                                <Label htmlFor="author" value="author" className='text-black-200' />
                            </div>
                            <TextInput id="author" type="text" required />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default UpdateBook
// export const links: LinksFunction = () => {
//     return [
//         {
//             rel: 'stylesheet',
//             href: styles
//         }
//     ]
// }
