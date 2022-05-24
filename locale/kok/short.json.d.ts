import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'kok';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;