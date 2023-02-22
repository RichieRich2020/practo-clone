
import React from 'react';

function NoAppointment() {
    return (
        <div>
<img src="data:image/png;base64,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" alt="No Booking Available" />
<p style={{color:"grey"}}>No slots available</p>   
</div>
    );
}

export default NoAppointment;