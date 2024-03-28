import { Dropdown } from "flowbite-react"
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import Prompts from "./Prompts";
import { Guid } from "guid-typescript";
function MyDropdown({ id }: any) {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className="flex-col justify-around">
            <Dropdown dismissOnClick={false} className="flex-col justify-between align-center" label={<BsThreeDotsVertical style={{
                color: "green"
            }} />}>
                <Dropdown.Item className="bg-green-300 flex justify-around">
                    <MdEdit />
                    <span>Edit</span>
                </Dropdown.Item>
            </Dropdown>
            <Prompts id={id} />
        </div>
    )
}
export default MyDropdown