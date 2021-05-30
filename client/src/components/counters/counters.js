import React from "react";

const Counters = ({ obj }) => {
    return (
        <section className="counters white-box">
            {obj.counters.map((counter) =>
                <div className="counters-one">
                    <span className="counters-one-icon"><i className={`pe-7s-${counter.class}`} /></span>
                    <h2>{counter.counter}</h2>
                    <p>{counter.text}</p>
                </div>
            )}
        </section>
    );
};

export default Counters;
