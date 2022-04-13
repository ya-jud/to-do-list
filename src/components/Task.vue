<template>
    <a-row>
        <a-card hoverable>
            <p><slot name="task"></slot></p>
            <span class="create-date">
                Task created on: <slot name="createdDate"></slot>
            </span>
        </a-card>
    </a-row>
</template>

<style scoped>
.ant-row {
    padding: 10px;
}
.ant-row > div {
    width: 100%;
    position: relative;
}
.create-date {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 14px;
}
</style>