import React from 'react';

const Field = ({ fields }) => {
    return (
        <div className="field">
            {
                fields.map((row, rowindex) => {
                    return row.map((column, columnindex) => {
                        return <div className={`dots ${column}`} key={`${rowindex}x${columnindex}y`} ></div>
                    })
                })
            }
        </div>
    );
};

export default Field;