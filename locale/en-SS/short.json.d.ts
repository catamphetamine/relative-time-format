import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-SS';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;