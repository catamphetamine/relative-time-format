import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-GD';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;