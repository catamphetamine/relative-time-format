import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'yo';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;