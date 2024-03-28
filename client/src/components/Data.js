import React from 'react';

const Data = () => {
    const gridData = [
        ["Employee Name:", "Start Time:", "End Time:", "Break:", "Shift Time:", "Notes:" ],
        ["John Bush", "8:30 am", "5:30 pm", "30 minutes", "8 hours", "none"],
        ["Tyson Davidson", "8:00 am", "5:00 pm", "15 minutes", "8 hours", "none"],
        ["Taylor Smith", "8:00 am", "5:00 pm", "30 minutes", "8 hours", "none"],
        ["Alex Miller", "8:00 am", "5:00 pm", "30 minutes", "8 hours", "Requested day off on Friday"]
        
      ];
    
      return (
        <div>
          {gridData.map((row, rowIndex) => (
            <div key={rowIndex} style={{ display: 'flex' }}>
              {row.map((cellData, colIndex) => (
                <div key={`${rowIndex}-${colIndex}`} style={{ backgroundColor: '#000000', border: '1px solid #000', padding: '10px', textAlign: 'center', flex: 1 }}>
                  {cellData}
                </div>
              ))}
            </div>
          ))}
        </div>
      );
}

export default Data;