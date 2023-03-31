#include <stdlib.h>
#include <stdio.h>
#include <string.h>

#include "task.h"
#include "list.h"
#include "schedulers.h"
#include "cpu.h"

struct node *head = NULL;
struct node *tail = NULL;
struct node *new_node = NULL;
int num_tasks = 0;

void add_task(char *name, int priority, int burst) {
    if (head == NULL) {
        head = malloc(sizeof(struct node));
        tail = malloc(sizeof(struct node));

        head->task = malloc(sizeof(struct task));
        head->task->name = name;
        head->task->burst = burst;
        head->task->priority = priority;

        head->next = NULL;

        tail = head;
    } else {
        new_node = malloc(sizeof(struct node));
        tail->next = new_node;

        new_node->task = malloc(sizeof(struct task));
        new_node->task->name = name;
        new_node->task->burst = burst;
        new_node->task->priority = priority;
        new_node->next = NULL;

        tail = new_node;
    }
}

void schedule_tasks() {
    int total_burst_time = 0;
    float total_turnaround_time = 0;
    float total_wait_time = 0;
    float total_response_time = 0;

    struct node *current_node = head;

    while (current_node != NULL) {
        num_tasks++;

        run(current_node->task, current_node->task->burst);

        total_burst_time += current_node->task->burst;

        total_turnaround_time += total_burst_time;

        if (current_node->next != NULL) {
            total_response_time += total_burst_time;
        }

        current_node = current_node->next;
    }

    total_wait_time = total_turnaround_time - total_burst_time;

    printf("The average turnaround time is : %f time units \n" , total_turnaround_time/num_tasks);
    printf("The average ResponseTime is : %f time units \n" , total_response_time/num_tasks);
    printf("The average WaitTime is : %f time units\n " , total_wait_time/num_tasks);
}
