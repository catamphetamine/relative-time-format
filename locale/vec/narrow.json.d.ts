import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'vec';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;