"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from 'react';

// Temporary static data
const currentProject = { name: 'Auror Time' };
const currentTask = { name: 'Create UI' };

export default function TrackerPage() {
  const [timerActive, setTimerActive] = useState(false);

  // Handler for toggling timer state
  const handleTimerToggle = () => setTimerActive((prev) => !prev);

  return (
    <div className={styles.trackerContainer}>
      {/* Tabs */}
      <nav className={styles.tabsNav}>
        <button className={`${styles.tab} ${styles.active}`}>Track</button>
        <button className={styles.tab}>Tasks</button>
        <button className={styles.tab}>Projects</button>
      </nav>

      {/* Current Project & Task */}
      <div className={styles.currentInfo}>
        <div>
          <span className={styles.projectName}>{currentProject.name}</span>
          <span className={styles.projectLabel}>Project</span>
        </div>
        <div>
          <span className={styles.taskName}>{currentTask.name}</span>
          <span className={styles.taskLabel}>Task</span>
        </div>
      </div>

      {/* Central Timer Button */}
      <div className={styles.timerSection}>
        <button
          className={timerActive ? styles.timerCircleActive : styles.timerCircle}
          onClick={handleTimerToggle}
          aria-label={timerActive ? 'Pause timer' : 'Start timer'}
        >
          <span className={styles.timerText}>00:00:00</span>
          <span className={styles.timerTaskLabel}>{currentTask.name}</span>
        </button>
      </div>

      {/* Timer Status */}
      <div className={styles.timerStatus}>
        <span className={styles.timerStatusIcon}>{timerActive ? '⏱️' : '⏲️'}</span>
        <span className={styles.timerStatusText}>{timerActive ? 'On' : 'Off'}</span>
      </div>
    </div>
  );
}
