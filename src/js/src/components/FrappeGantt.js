// src/js/components/FrappeGantt.js
import React, { useEffect, useRef } from 'react';
import Gantt from 'frappe-gantt';

const FrappeGantt = ({ tasks }) => {
    const ganttRef = useRef(null);

    useEffect(() => {
        if (ganttRef.current && tasks) {
            new Gantt(ganttRef.current, tasks, {
                view_mode: 'Day', // ビューモードの設定: Day, Week, Month
                language: 'en' // 言語の設定
            });
        }
    }, [tasks]);

    return <div ref={ganttRef} />;
};

export default FrappeGantt;
