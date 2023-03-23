import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [reset, setReset] = useState(false);
    const [feedback, setFeedback] = useState([
        {
            id: "1",
            rating: 10,
            text: "The product is pretty good !",
        },
        {
            id: "2",
            rating: 9,
            text: "The application's functionality was flawless. Users were able to do a group chat",
        },
    ]);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    });

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete ?")) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        });
    };

    const updateFeedback = (id, updatedItem) => {
        setFeedback(
            feedback.map((item) =>
                item.id === id ? { ...item, ...updatedItem } : item
            )
        );
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                feedbackEdit,
                reset,
                setReset,
                deleteFeedback,
                addFeedback,
                editFeedback,
                updateFeedback,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;
