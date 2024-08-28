import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_event_thunk } from "../redux/event-thunk";
import { setEventForm } from "../redux/event-slice";

const AddEvent = ({ isOpen, onClose, onEventAdded }) => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.events);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(setEventForm({ title, description }));
        await dispatch(add_event_thunk());
        onEventAdded();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold mb-4">Add Event</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Event Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg"
                            required
                        ></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-3 py-2 bg-blue-500 text-white rounded-lg mr-2"
                            disabled={loading}
                        >
                            {loading ? "Saving..." : "Save"}
                        </button>
                        <button
                            onClick={onClose}
                            type="button"
                            className="px-3 py-2 bg-red-500 text-white rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEvent;
