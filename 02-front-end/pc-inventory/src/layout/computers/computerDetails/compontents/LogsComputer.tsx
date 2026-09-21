export const LogsComputers = (props: { present: boolean }) => {
  return (
    <>
      <div
        className="d-flex  align-items-center  rounded-3 p-2"
        style={{ backgroundColor: "var(--more-light)" }}
      >
        <i className="bi bi-clock-history mx-2"></i>

        <h6 className="mb-0">Logs</h6>
      </div>
      <div className="table-scroll-container">
        {props.present ? (
          <table className="table table-striped table-hover table-bordered">
            <thead className="table-dark gray">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Date</th>
                <th scope="col">Perfomed By</th>
                <th scope="col">Details</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>15/10/2026</td>
                <td>kareem yasser</td>
                <td>make Maintenance and chaged Ram to 8GB</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>10/4/2026</td>
                <td>mohamed yahe</td>
                <td>change Hard from ssd to nvme</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>9/9/2024</td>
                <td>kareem yasser</td>
                <td>Create PC Asset</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p className="text-center fs-1"> No logs yet</p>
        )}
      </div>
    </>
  );
};
