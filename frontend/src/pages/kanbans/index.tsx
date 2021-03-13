import React from 'react';
import { Link } from 'react-router-dom';

export interface KanbansProps {}

const Kanbans: React.FC<KanbansProps> = () => <Link to="/kanban/1">kanban - 1</Link>;

export default Kanbans;
