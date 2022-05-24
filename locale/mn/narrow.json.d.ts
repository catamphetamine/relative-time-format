import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'mn';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;