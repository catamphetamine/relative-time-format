import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'eu';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;