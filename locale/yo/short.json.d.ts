import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'yo';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;