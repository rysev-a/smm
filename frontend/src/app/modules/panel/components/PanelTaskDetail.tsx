const PanelTaskDetail = ({ taskDetail }) => (
  <div className="card">
    {console.log(taskDetail)}
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4">{taskDetail.name}</p>
          <div>Проект: {taskDetail.project.name}</div>
          <div>Создатель: {taskDetail.creator.email}</div>
          <div>Исполнитель: {taskDetail.assignee.email}</div>
        </div>
      </div>

      <div className="content">
        {taskDetail.description}
        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
  </div>
);

export default PanelTaskDetail;
