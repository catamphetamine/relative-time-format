import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'gd';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;