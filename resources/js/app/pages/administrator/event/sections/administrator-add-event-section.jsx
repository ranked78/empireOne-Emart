import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_event_thunk, get_event_thunk } from "../redux/event-thunk";
import { setEventForm } from "../redux/event-slice";
import Input from "@/app/components/input";
import Modal from "@/app/components/modal"; // Assuming you have a Modal component

const AddEvent = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const { eventForm } = useSelector((state) => state.events);
    const [title, setTitle] = useState(eventForm.title || "");
    const [description, setDescription] = useState(eventForm.description || "");
    const loading = useSelector((state) => state.events.loading); // Assuming you have a loading state

    const handleEventAdded = () => {
        dispatch(get_event_thunk()); // Refresh the event list after an event is added
        handleClosePopup(); // Optionally close the popup
    };

    const handleClosePopup = () => {
        setTitle(""); // Clear form fields when closing the popup
        setDescription("");
        onClose(); // Call the onClose prop to handle any additional logic
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(setEventForm({ title, description }));
        await dispatch(add_event_thunk());
        handleEventAdded();
    };

    if (!isOpen) return null;

    return (
        <Modal width="max-w-3xl" open={isOpen} setOpen={handleClosePopup}>
            <h2 className="text-lg font-bold mb-4">Add Event</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                <div className="mb-4">
                    <Input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        name="title"
                        label="Event Title"
                        required
                    />
                </div>
                <div className="mb-4">
                    <Input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        name="description"
                        label="Description"
                        required
                    />
                </div>
                <div className="flex justify-end gap-4">
                    <button
                        type="submit"
                        className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
                        disabled={loading}
                    >
                        {loading ? "Saving..." : "Save"}
                    </button>
                    <button
                        onClick={handleClosePopup}
                        type="button"
                        className="px-3 py-2 bg-white text-gray-900 rounded-md ring-1 ring-gray-300 hover:bg-gray-50"
                    >
                        Close
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default AddEvent;
